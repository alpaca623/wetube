import './db';
import app from "./index";
import dotenv from 'dotenv';
dotenv.config();
// 저장된 스키마 불러오기
import './models/Video';
import './models/Comment';

const PORT = process.env.PORT;

const handleListening = () => {
  console.log(`✅ Listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
