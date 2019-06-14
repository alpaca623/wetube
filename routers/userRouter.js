import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";
import { syncPrivate } from "../localMiddleware";

const userRouter = express.Router();

userRouter.get(routes.editProfile, syncPrivate, editProfile);
userRouter.get(routes.changePassword, syncPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
