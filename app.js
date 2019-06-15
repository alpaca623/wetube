import express from "express";
import mongoose from "mongoose";

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import expressSession from "express-session";
import MongoStore from "connect-mongo";
import morgan from "morgan";
import helmet from "helmet";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localMiddleware } from "./localMiddleware";
import "./passport";

const app = express();

const CokieStore = MongoStore(expressSession);

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  expressSession({
    secret: process.env.COOKIE_SECRET, // 쿠키 암호화 처리
    resave: false,
    saveUninitialized: false,
    store: new CokieStore({ mongooseConnection: mongoose.connection })
  })
);
// passport가 동작할 수 있도록 초기화, 그 후 세션 open..?(cookieparser 뒤에 선언해야 함)
app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
