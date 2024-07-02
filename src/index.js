const express = require('express')

const app = express();

const connect = require('./config/database');

// const Tweet = require('./model/tweet');
// const Comment = require('./model/comment');


// const repoclass = require('./repository/tweet-repository');

// const repoclassobject = new repoclass();


app.listen(3000, async () => {
    console.log(`server started on port 3000`);
    await connect();
    console.log(`Mongo db connected`);

    // const tweet =await  repoclassobject.getWithComments('6683ef36269d4d4adaa8e13b');
    // console.log(tweet);

    // const cc = await Comment.create({content:"This is my first comment"});
    // tweet.comments.push(cc);
    // tweet.save();
    // console.log(tweet);
})

