/* 
Note:Please don't forget to install node models and packages that are in json file
*/

const apiKey='your voicerss Api Key';
const express=require('express');
const cors=require('cors');
const server=express();
const fetch = require('node-fetch');
server.use(express.urlencoded({extended:false}));
server.use(express.json());
server.use(cors());

server.post('/fetchAudio',async(req,res)=>{
    const {text}=req.body;
    const apiUrl=`http://api.voicerss.org/?key=${apiKey2}&hl=en-us&c=MP3&f=16khz_16bit_stereo&src=${text}`;
    const response=await fetch(apiUrl);
    res.json(response.url);
})
server.listen(process.env.PORT);