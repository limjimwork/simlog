import { Router, Request, Response } from "express";
import User from "../models/user";
const router = Router();

//=================================
//             User
//=================================

router.post("/signin", (req: Request, res: Response) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.status(400).json({
        loginSuccess: false,
        message: "Auth failed, email not found.",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res
          .status(400)
          .json({ loginSuccess: false, message: "Wrong password." });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("_token", user.token).status(200).json({
          loginSuccess: true,
        });
      });
    });
  });
});

// router.get("/logout", auth, (req, res) => {
//   User.findOneAndUpdate(
//     { _id: req.user._id },
//     { token: "" },
//     (err, doc) => {
//       if (err) return res.json({ success: false, err });
//       return res.status(200).send({
//         success: true,
//       });
//     }
//   );
// });

module.exports = router;
