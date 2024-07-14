import express from 'express';
import { toggleLike } from '../../controllers.js/like-controller.js';
import { createTweet } from '../../controllers.js/tweet-controllers.js';

const router = express.Router()

router.post('/tweets',createTweet);
router.post('/likes/toggle',toggleLike);


export default router;