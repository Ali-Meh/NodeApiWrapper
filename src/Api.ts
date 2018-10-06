import express from 'express';
import {client} from './Client'
let router=express.Router();


router.get("/MAP/:Name",(req,res)=>{

    let c=client.build(req.params.Name);
    
    if(c){
        res.send({c:c.temp});
    }else{
        res.status(400).send({
            Code:"400",
            message:`The Client hasn't created you may have reached the maximum number of Clients avilible for the game ` 
        })
    }

})


router.get("/:Name",(req,res)=>{
    let c=client.build(req.params.Name);
    if(c){
        res.status(200).send({
            message:`The Client Created use '/${req.params.Name}/X-Y' URL TO SEND YOUR CHOSEN CORDENATES` 
        })
    }else{
        res.status(400).send({
            Code:"400",
            message:`The Client hasn't created you may have reached the maximum number of Clients avilible for the game ` 
        })
    }
});

router.get("/:Name/:Cord",(req,res)=>{
    let c=client.build(req.params.Name);
    if(!c){
        res.status(404).send({
            Code:"404",
            message:`The Client With The Name of ${req.params.Name} NOT FOUND Please First Create one in /${req.params.Name} end point` 
        })  
    }else if(!validateSend(req.params.Cord)){
        res.status(400).send({
            Code:"400",
            message:`the answer of You must be in the format of 'X-Y' you send US ${req.params.Cord}` 
        })  
    }else{
        c.Send(req.params.Cord);
        res.status(200).send({
            Code:"200",
            message:`You Got The ${req.params.Cord} Cords` 
        })  
    }
});


function validateSend(CORD:string){
    let cords=CORD.split('-');
    //@ts-ignore
    if(cords.length==2&&!isNaN(cords[0])&&!isNaN(cords[1]))
        return true;
    return false;
}









module.exports=router;