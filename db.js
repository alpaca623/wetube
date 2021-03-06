import dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("✅ Open DB connection!");
});
db.on("error", error => console.log(`❌ Occur error:${error}`));
