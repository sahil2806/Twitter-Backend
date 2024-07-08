const express = require('express')

const app = express();

const connect = require('./config/database');


const {TweetService} = require('./services/index');

app.listen(3000, async () => {
    console.log(`server started on port 3000`);
    await connect();
    console.log(`Mongo db connected`);

    const str = `#rahul is the most popular #sahil which is used Everywhere in the  `;
    const tweetService = new TweetService();
    const ans = await tweetService.create({content:str});
    console.log('ans',ans);



})


