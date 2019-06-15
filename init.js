import dotenv from 'dotenv';

//
//  db와 app의 불러오는 순서가 바뀌면
//  throw new TypeError('OAuth2Strategy requires a clientID option')
//  에러가 발생하는데, 이는 db에서 dotenv.config()가 선언되어 있기때문에
//  app에서 passport부분 호출시 .env의 변수를 찾지 못한다.
//  왜그런지 한참 해맸네..
//
import './db';
import app from "./app";


// 저장된 스키마 불러오기
import './models/Video';
import './models/Comment';
import './models/User';

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`✅ Listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
