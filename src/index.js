const express = require('express')

const app = express();

const connect = require('./config/database');

// const Tweet = require('./model/tweet');
// const Comment = require('./model/comment');


const repoclass = require('./repository/tweet-repository');

const repoclassobject = new repoclass();


app.listen(3000, async () => {
    console.log(`server started on port 3000`);
    await connect();
    console.log(`Mongo db connected`);

    const tweet =await  repoclassobject.getAll(0,2);
    const contentWithEmail = tweet[0].contentWithEmail;
    console.log(contentWithEmail);
    // console.log(tweet[0]._id);
    // console.log(tweet[0].id);

    // const cc = await Comment.create({content:"This is my first comment"});
    // tweet.comments.push(cc);
    // tweet.save();
    // console.log(tweet);
})

