import express from "express";
import routes from "../routes";
import {
  home,
  videoDetail,
  editVideo,
  deleteVideo,
  postUpload,
  getUpload
} from "../controllers/videoController";
import { uploadVideo } from "../localMiddleware";

const videoRouter = express.Router();

// 중간에 multer를 통해 비디오 업로드를 처리한다.
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.upload, getUpload);

videoRouter.get(routes.videos, home);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
