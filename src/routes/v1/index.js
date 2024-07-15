import express from 'express';
import { toggleLike } from '../../controllers.js/like-controller.js';
import { createTweet ,getTweet} from '../../controllers.js/tweet-controllers.js';
import { createComment } from '../../controllers.js/comment-controller.js';
 

const router = express.Router()

router.post('/tweets',createTweet);
router.get('/tweets/:id',getTweet);


router.post('/likes/toggle',toggleLike);
router.post('/comments',createComment);

export default router;