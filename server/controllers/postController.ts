// @ts-ignore
const db = require('../models/dbModel');

const postController: any = {};

postController.getUserPosts = (req: any, res: any, next: any) => {
  const { user_id } = req.params;
  const queryString = 'SELECT * FROM posts WHERE user_id = $1;';
  const values = [user_id];
  // 112471007958051224275
  db.query(queryString, values)
    .then(({ rows }: any) => {
      console.log('rows from get all posts request', rows);
      res.locals.posts = rows;
      next();
    })
    .catch(pstController.createNewPost = (req: any, res: any, next: any) => {
  nst {
     position,
    date,
    status,
    salary,
    contact,
    reference,
    link,
    notes,
  } = req.body;

  const { user_id } = req.params;
  const queryString = 'INSERT INTO posts';
  const values = [
    company,
    position,
    date,
    status,
    salary,
    contact,
    reference,
    link,
    notes,
  ];

  db.query(queryString, values)
    .then((data: any) => {
      console.log(data);
      next();
    })
    .catch((err: any) => next(err));
};

postController.updatePost = (req: any, res: any, next: any) => {
  const queryString = '';
  const values = [res];

  db.query(queryString, values)
    .then(() => next())
    .catch((err: any) => next(err));
};

module.exports = postController;
