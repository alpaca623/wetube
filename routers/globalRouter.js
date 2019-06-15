import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  getGithubLogin,
  postGithubLogin
} from "../controllers/userController";
import { syncPublic } from "../localMiddleware";

const globalRouter = express.Router();
globalRouter.get(routes.join, syncPublic, getJoin);
globalRouter.post(routes.join, syncPublic, postJoin, postLogin);

globalRouter.get(routes.login, syncPublic, getLogin);
globalRouter.post(routes.login, syncPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.github, getGithubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

export default globalRouter;
