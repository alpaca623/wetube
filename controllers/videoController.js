import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    // find 메서드는 mongoose.model쪽에서 제공한다.
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (e) {
    console.log(e);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  const videos = Video.find({});
  res.render("search", { pageTitle: 'Search', searchingBy, videos });
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
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  // url에서 비디오의 id를 받아온다.
  const {
    params: { id }
  } = req;
  try {
    // DB에서 id에 해당하는 비디오를 가져와서 정보를 전달한다(fileurl, title, description, views 등)
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video detail", video });
  } catch (e) {
    res.render(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: "Edit video", video });
  } catch (e) {
    res.status(400);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findByIdAndUpdate(id, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (e) {
    console.log(e);
    // res.redirect(routes.editVideo());
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Video.findByIdAndRemove(id);
  } catch (e) {
    res.status(400);
  } finally {
    res.redirect(routes.home);
  }
  // res.render("deleteVideo", { pageTitle: "Delete Video" });
};
