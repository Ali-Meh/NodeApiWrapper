import express from 'express';
import {exec} from 'child_process';
import '../Config/Config.ts'
let app=express();
app.disable('x-powered-by');
app.use("/",require('./Api'));

app.get("/",(req,res)=>{

});



app.listen(process.env.LPORT,()=>{
    exec(`java -jar "${__dirname+"\\libs\\server.jar"}"`,(err,stdout,stderr)=>{
        console.log(err);
        console.log("------------------------------------");
        console.log(stdout);
        console.log("------------------------------------");
        console.log(stderr);
        if(stderr)
            process.exit(0);
        
        
        
    });
    console.log("appp runs on port "+process.env.LPORT);
})





