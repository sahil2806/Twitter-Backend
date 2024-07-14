
import bodyParser from 'body-parser';
import express from 'express';
import { connect } from './config/database.js';
import apiroutes from './routes/index.js';

const app = express();

import { TweetRepository } from './repository/index.js';

const tweetRepository = new TweetRepository();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api',apiroutes);


app.listen(3000, async () => {
    console.log(`server started on port 3000`);
    await connect();
    console.log(`Mongo db connected`);
    
    

    // const result = await User.create({
    //     email : 'sahilsahu2806@gmail.com',
    //     password : '123456789',
    //     name : 'sahil sahu'
    // });
    // console.log(result);

    // const result = await tweetRepository.get('669251d6728fee762cc59f70');
    // console.log(result)
})


