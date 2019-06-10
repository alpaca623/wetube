import dotenv from 'dotenv';
import app from "./index";
import './db';

import './models/Video';
import './models/Comment';
import './models/User';

dotenv.config();
// 저장된 스키마 불러오기

const {PORT} = process.env;

const handleListening = () => {
  console.log(`✅ Listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
