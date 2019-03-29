import express from 'express';

import routes from '../routes';
import { search, home } from '../controllers/videoController';
import {getJoin, postJoin, getLogin, postLogin, logout } from '../controllers/userController';

const globalRouter = express.Router();

// 같은 url이라 하더라도 get하고 post는 각각 라우팅이 된다.
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout,logout);
// globalRouter.post(routes.logout,postLogout);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

export default globalRouter;