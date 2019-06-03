import express from "express";
import routes from "../route";
import {
  home,
  videoDetail,
  editVideo,
  deleteVideo,
  postUpload,
  getUpload
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.upload, getUpload);

videoRouter.get(routes.videos, home);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
