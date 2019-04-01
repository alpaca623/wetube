import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/we-tube',{
  useNewUrlParser:true,
  useFindAndModify:false
});

const db = mongoose.connection;

const handleOpen = () => console.log('✅ Open db connection!!');
const handleError = (error) => console.log(`❌ Error Occur : ${error}`)

db.once('open', handleOpen);
db.on('error', handleError);