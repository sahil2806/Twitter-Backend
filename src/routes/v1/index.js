import express from 'express';
import { createTweet } from '../../controllers.js/tweet-controllers.js';


const router = express.Router()

router.post('/tweets',createTweet);

export default router;