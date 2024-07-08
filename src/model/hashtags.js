// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, { timestamps: true });

const HashTag = mongoose.model('HashTag', hashtagSchema);
// module.exports = HashTag;
export default HashTag;
