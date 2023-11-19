import mongoose from 'mongoose';

const LogSchema=new mongoose.Schema({
    level:{type:String},
    message:{type:String},
    resourceId:{type:String},
    timestamp:{type:Date},
    traceId:{type:String},
    spanId:{type:String},
    commit:{type:String},
    metadata:{
        parentResourceId:String
    }
})

export const LogModel=mongoose.model('log',LogSchema);