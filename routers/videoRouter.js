import express from "express";
import routes from "../routes";
import {
  videoDetail,
  deleteVideo,
  postUpload,
  getUpload,
  getEditVideo,
  postEditVideo
} from "../controllers/videoController";
import { uploadVideo, syncPrivate } from "../localMiddleware";

const videoRouter = express.Router();

// 중간에 multer를 통해 비디오 업로드를 처리한다.
videoRouter.post(routes.upload, syncPrivate, uploadVideo, postUpload);
videoRouter.get(routes.upload, syncPrivate, getUpload);

// 비디오 내용 수정(제목, 설명)
videoRouter.get(routes.editVideo(), syncPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), syncPrivate, postEditVideo);

videoRouter.get(routes.videoDetail(), syncPrivate, videoDetail);

videoRouter.get(routes.deleteVideo(), syncPrivate, deleteVideo);

export default videoRouter;
