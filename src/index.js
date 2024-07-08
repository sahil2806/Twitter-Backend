
import express from 'express';
import connect from './config/database.js';
const app = express();

import HashtagRepository from './repository/hashtag-repository.js';
const hashtagRepository = new HashtagRepository();


app.listen(3000, async () => {
    console.log(`server started on port 3000`);
    await connect();
    console.log(`Mongo db connected`);
    
    const response = await hashtagRepository.create({title:'SAHIL'})
    console.log(response);
})


