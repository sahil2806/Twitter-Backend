const mongoose = require('mongoose');

const connect = async ()=>{
    await mongoose.mongoose.connect('mongodb://localhost/twitter_Dev')
}

module.exports = connect;