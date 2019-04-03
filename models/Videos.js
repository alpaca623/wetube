import mongoose from "mongoose";

// Model을 사용하기 위해 Schema를 먼저 선언한다.
const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File Urls is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

// 선언된 스키마를 이용하여 모델을 선언한다.

const model = mongoose.model("Video", VideoSchema);

export default model;
