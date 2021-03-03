const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController.ts');

/*
GET '/job'

POST '/job'

PUT '/job/:id'

DELETE '/job/:id'
*/

router.get('/post/:user_id/all', postController.getUserPosts, (req, res) => {
  return res.status(200).json();
});
