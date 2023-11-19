import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { LogRouter } from './Routes/LogRouter.js';
import mongoose from 'mongoose';

const app=express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",LogRouter);

mongoose.connect('mongodb://0.0.0.0:27017/logData').
then(console.log('connected with database'));

app.listen(3000,(req,res)=>{
    console.log('Working on port 3000');
});