const express=require('express')

const app=express();
const PORT=3000;

const userRoute=require('./routes/user');

app.use("/user",userRoute);

app.listen(PORT,()=>console.log(`server is working at port ${PORT}`));
