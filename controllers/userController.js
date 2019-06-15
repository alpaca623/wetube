import passport from "passport";

import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // user 정보를 모델로 만듬
    try {
      const user = await User({
        name,
        email
      });

      // 모델.. 등록 음..
      // Convenience method to register a new user instance with a given password
      await User.register(user, password);
      next();
    } catch (e) {
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = passport.authenticate("local", {
  /*
   * login 처리를 passport의 middleware로 처리한다.
   * 인증이 되면 localmiddleware에서 req객체에 user 정보가 저장된다.
   * 아닌경우 home화면으로 redirect 됨
   */
  successRedirect: routes.home,
  failureRedirect: routes.login
});
// login요청이 들어오면 사용자 인증 결과에 따라 페이지를 redirect한다.

export const getGithubLogin = passport.authenticate("github");

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

export const githubAuthCallbackFunc = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return cb(null, user);
    }
    // 6/15 - not find user.get function - 동기 처리를 하지 않아서 발생하는 문제이다.
    const newUser = await User.create({
      name,
      email,
      avatarUrl: avatar_url,
      githubId: id
    });
    return cb(null, newUser);
  } catch (e) {
    return cb(e);
  }
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
