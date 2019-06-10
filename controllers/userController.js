import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });

    // user 정보를 모델로 만듬
    try {
      const user = await User({
        name,
        email
      });
      // 모델.. 등록 음..
      // Convenience method to register a new user instance with a given password
      await User.register(user, password);
    } catch (e) {
      console.log(e);
    }
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => res.redirect(routes.home);

export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
