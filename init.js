import './db';

// 저장된 스키마 불러오기
import './models/Video';
import './models/Comment';

import dotenv from 'dotenv';
import app from "./index";
dotenv.config();

const PORT = process.env.PORT;

const handleListening = () => {
  console.log(`✅ Listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
