import express from "express";
import routes from "../routes";
import {
  home,
  videoDetail,
  deleteVideo,
  postUpload,
  getUpload,
  getEditVideo,
  postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../localMiddleware";

const videoRouter = express.Router();

// 중간에 multer를 통해 비디오 업로드를 처리한다.
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.upload, getUpload);

// 비디오 내용 수정(제목, 설명)
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.videos, home);
videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
