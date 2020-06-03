import { NextFunction } from "express";
import * as mongoose from "mongoose";
import * as jwt from "jsonwebtoken";
import bcrypt = require("bcrypt");

const saltRounds = 10;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minglength: 5,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// 비밀번호가 변경될 경우 암호화
// pre는 특정 동작 이전에 할 행동을 정의, "save"이전
userSchema.methods.pre("save", function (next: NextFunction) {
  var user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// 비밀번호가 일치하는지 확인
userSchema.methods.comparePassword = function (plainPassword: string, cb: any) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

// 토큰 생성
userSchema.methods.generateToken = function (cb: any) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), "secret");
  // var oneHour = moment().add(1, "hour").valueOf();

  // user.tokenExp = oneHour;
  user.token = token;
  user.save(function (err: Error, user: string) {
    if (err) return cb(err);
    cb(null, user);
  });
};

// statics는 모델에 바로 쓸 수 있는 메소드
userSchema.statics.findByToken = function (token: string, cb: any) {
  var user = this;

  jwt.verify(token, "secret", function (err, decode) {
    user.findOne({ _id: decode, token: token }, function (
      err: Error,
      user: any
    ) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

let User = mongoose.model("User", userSchema);

export default User;
