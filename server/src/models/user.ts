import { NextFunction } from "express";
import * as mongoose from "mongoose";
import * as jwt from "jsonwebtoken";
import bcrypt = require("bcrypt");

const saltRounds = 10;
const Schema = mongoose.Schema;

interface IUser extends mongoose.Document {
  email: string;
  password: string;
  token: string;
  tokenExp: number;

  comparePassword(
    plainPassword: string,
    cb: (err: Error, isMatch?: boolean) => void
  ): void;
  generateToken(cb: (err: Error, user?: IUser) => void): void;
}
interface IUserModel extends mongoose.Model<IUser> {
  findByToken(token: string, cb: (err: Error, user?: IUser) => void): void;
}

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
userSchema.pre<IUser>("save", function (next: NextFunction) {
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
userSchema.methods.comparePassword = function (
  plainPassword: string,
  cb: (err: Error, isMatch?: boolean) => void
) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

// 토큰 생성
userSchema.methods.generateToken = function (
  cb: (err: Error, user?: IUser) => void
) {
  var user: IUser = this;
  var token = jwt.sign(user._id.toHexString(), "secret", { expiresIn: "1h" });

  user.token = token;
  user.save(function (err: Error, user: IUser) {
    if (err) return cb(err);
    cb(null, user);
  });
};

// statics는 모델에 바로 쓸 수 있는 메소드
// 유효성 검사
userSchema.statics.findByToken = function (
  token: string,
  cb: (err: Error, user?: IUser) => void
) {
  jwt.verify(token, "secret", function (err, decode) {
    User.findOne({ _id: decode, token: token }, function (
      err: Error,
      user: IUser
    ) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model<IUser, IUserModel>("User", userSchema);

export default User;
