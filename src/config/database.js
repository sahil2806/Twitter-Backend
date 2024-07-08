// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const connect = async ()=>{
    await mongoose.mongoose.connect('mongodb://localhost/twitter_Dev')
}

export default connect;
// module.exports = connect;