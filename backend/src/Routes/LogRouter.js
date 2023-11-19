import express from 'express';
import {LogModel} from '../Models/Log.js';

const router=express.Router();

router.post('/',async (req,res)=>{
    const {level,message,resourceId,timestamp,
        traceId,spanId,commit,parentResourceId}=req.body;
    let query={};
    if(level!=='')query.level=level;
    if(message!=='')query.message=message;
    if(resourceId!=='')query.resourceId=resourceId;
    if(timestamp!=='')query.timestamp=timestamp;
    if(traceId!=='')query.traceId=traceId;
    if(spanId!=='')query.spanId=spanId;
    if(commit!=='')query.commit=commit;
    if(parentResourceId!='')
        query.metadata={"parentResourceId":parentResourceId};
    
    if(Object.keys(query).length===0){
        console.log("here");
        return res.json({data:null});
    }
    console.log("here also");
    try{
        const logdata=await LogModel.find(query);
        return res.status(200).json({data:logdata});
    }catch(err){
        console.log(err);
        return res.status(500).json({data:null});
    }
});
router.post('/log',async (req,res)=>{
    const {level,message,resourceId,timestamp,
        traceId,spanId,commit,parentResourceId}=req.body;
    let query={};
    if(level!=='')query.level=level;
    if(message!=='')query.message=message;
    if(resourceId!=='')query.resourceId=resourceId;
    if(timestamp!=='')query.timestamp=timestamp;
    if(traceId!=='')query.traceId=traceId;
    if(spanId!=='')query.spanId=spanId;
    if(commit!=='')query.commit=commit;
    if(parentResourceId!='')
        query.metadata={"parentResourceId":parentResourceId};
    try{
        await LogModel.create(query);
        return res.status(200).json({data:"created"});
    }catch(err){
        console.log(err);
        return res.status(500).json({data:null});
    }
});

export {router as LogRouter}