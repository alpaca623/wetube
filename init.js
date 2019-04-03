import './db';
import app from "./app";
import dotenv from 'dotenv';
// 그냥 import만 시키면 되는건감..?
import './models/Video';
import './models/Comment';

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`Listening on : http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
