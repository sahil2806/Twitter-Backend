import { LikeRepository, TweetRepository } from "../repository/index.js";

class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

     //URL//  ---->  /api/v1/likes/toggle?id=modelid&type=Tweet
    async toggleLike(modelId,modelType,userId){
        
        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.get(modelId);
        } else if (modelType == 'Comment'){
        //    TODO:
        } else {
            throw new Error('unknown model type');
        }

        const exists = await this.likeRepository.findByUserAndLikeable({
            user:userId,
            onModel:modelType,
            likeable : modelId
        })
        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await this.likeRepository.destroy(exists.id);
            var isRemoved = false;
        } else {
            const newLike = await this.likeRepository.create({
                user:userId,
                onModel:modelType,
                likeable:modelId
            })
            console.log('newLike',newLike);
            likeable.likes.push(newLike);
            await likeable.save();
            var isRemoved = true;
        }
        return isRemoved;
    }
}


export default LikeService;