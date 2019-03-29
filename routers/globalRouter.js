import express from 'express';

import routes from '../routes';
import { search, home } from '../controllers/videoController';
import { logout, login, getJoin, postJoin, getLogin, postLogin } from '../controllers/userController';

const globalRouter = express.Router();

// 같은 url이라 하더라도 get하고 post는 각각 라우팅이 된다.
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout,logout);
globalRouter.get(routes.search, search);

export default globalRouter;