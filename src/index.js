// const express = require('express')
import express from 'express';
import connect from './config/database.js';

const app = express();

// const connect = require('./config/database');
 

 

app.listen(3000, async () => {
    console.log(`server started on port 3000`);
    await connect();
    console.log(`Mongo db connected`);

    
})


