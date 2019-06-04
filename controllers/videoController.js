import routes from '../routes';
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    // find 메서드는 mongoose.model쪽에서 제공한다.
    const videos = await Video.find({});
    console.log(videos);
    res.render("home", { pageTitle: "Home", videos });
  } catch (e) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  // 1. form 데이터로 전송된 upload파일과 input 데이터 정보를 받는다.
  const {
    body: { title, description },
    file: { path }
  } = req;
  // 2. mongoose 모델에서 제공되는 create메서드로 새로운 비디오 객체를 만든다.
  // https://mongoosejs.com/docs/api.html#model_Model.create
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
