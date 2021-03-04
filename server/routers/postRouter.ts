// @ts-ignore
const express = require('express');
const router = express.Router();
// @ts-ignore
const postController = require('../controllers/postController.ts');

router.get(
  '/:user_id/all',
  postController.getUserPosts,
  (req: any, res: any) => {
    return res.status(200).json(res.locals.posts);
  }
);

router.post(
  '/:user_id',
  postController.createNewPost,
  (req: any, res: any) => {
    return res.sendStatus(201);
  }
);

router.delete(
  '/:user_id/:post_id',
  postController.deletePost,
  (req: any, res: any) => {
    return res.sendStatus(204);
  }
);

router.put(
  '/:user_id/:post_id',
  postController.updatePost,
  (req: any, res: any) => {
    return res.sendStatus(200);
  }
);

module.exports = router;
