import express from 'express';
import '../Config/Config.ts'
let app=express();
app.disable('x-powered-by');
app.use("/",require('./Api'));

app.get("/",(req,res)=>{

});



app.listen(process.env.LPORT,()=>{
    console.log("appp runs on port "+process.env.LPORT);
})





