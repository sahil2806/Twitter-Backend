// const {mongoose} = require('mongoose');
import mongoose from 'mongoose';


const tweetSchema = new mongoose.Schema({
    content:{
        type : String,
        required : true,
        max : [250,'Tweet cannot be more than 250 character'],
    },
    hashtags :[
        {
            type :mongoose.Schema.Types.ObjectId,
            ref : 'HashTag'
        }
    ]
},{timestamps:true});

const Tweet = mongoose.model('Tweet',tweetSchema);
// module.exports = Tweet;
export default Tweet



