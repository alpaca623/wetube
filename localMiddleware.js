import multer from 'multer';
import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1
  };
  next();
};

// multer를 이용하여 비디오 파일의 저장 위치를 정해주고 upload된 videofile의 정보를 받는다.
const multerVideo = multer({dest:'uploads/videos/'});
export const uploadVideo = multerVideo.single("videoFile");