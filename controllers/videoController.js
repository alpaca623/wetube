import { videos } from "../db";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) =>{
  // To do : video upload and redirect video detail
  res.redirect(routes.videoDetail());
}

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
