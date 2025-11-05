const express=require('express');
const app=express();
const mongoose=require('mongoose');
const router = require('./router/router');

require('dotenv').config();
MongoUrl=process.env.MONGO_URL;
Port=process.env.PORT||3001;

mongoose.connect(MongoUrl)
.then(()=>console.log('MongoDB is connected'))
.catch((err)=>console.log(err))

app.set('view engine','ejs');
app.set('views','views');

app.use(express.urlencoded({extended:false}));

app.use('/',router);
app.listen(Port,()=>{
  console.log(`server is running at http://localhost:${Port}`);
});