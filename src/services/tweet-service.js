const TweetRepository = require('../repository/index')

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
    }

    async create(data){
        const content = data.content;
        const tags = content.match('/#[a-zA-Z0-9_]+/g');
        tags = tags.map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        //  TODO: create hastag and add  here
       /**
        * 1.Bulkcreate in mongoose.
        * 2.filter title of hastag based on the multiple of hashtags.
        * 3.How to add tweet id inside all the hashtags.
        */
        return tweet
    }
}

module.exports = TweetService;


/**
 *   This is my #first #tweet . I am really  #excited
 */

// we have to find the word with starting character '#' and ending character ' '  so we used regular expression to find all those words.