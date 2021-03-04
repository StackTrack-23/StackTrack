// @ts-ignore
const db = require('../models/dbModel');
// @ts-ignore
const postController: any = {};

postController.getUserPosts = (req: any, res: any, next: any) => {
  const { user_id } = req.params;
  const queryString = 'SELECT * FROM posts WHERE user_id = $1;';
  const values = [user_id];

  db.query(queryString, values)
    .then(({ rows }: any) => {
      console.log('rows from get all posts request', rows);
      res.locals.posts = rows;
      next();
    })
    .catch((err: any) => next(err));
};

postController.createNewPost = (req: any, res: any, next: any) => {
  const {
    company,
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
  const queryString = `
    INSERT INTO posts 
      (company, position, date_apply, status, salary, contact, reference, link, notes, user_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
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
    user_id,
  ];

  db.query(queryString, values)
    .then((data: any) => {
      console.log(data);
      next();
    })
    .catch((err: any) => next(err));
};

postController.updatePost = (req: any, res: any, next: any) => {
  const {
    company,
    position,
    date,
    status,
    salary,
    contact,
    reference,
    link,
    notes,
  } = req.body;

  const { post_id } = req.params;

  const queryString = `
  UPDATE posts
  SET company = $1, position = $2, date_apply = $3, status = $4, salary = $5, contact = $6, reference = $7, link = $8, notes = $9
  WHERE post_id = $10;`;

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
    post_id,
  ];

  db.query(queryString, values)
    .then(() => next())
    .catch((err: any) => next(err));
};

postController.deletePost = (req: any, res: any, next: any) => {
  const queryString = 'DELETE FROM posts WHERE post_id = $1;';
  const values = [req.params.post_id];
  db.query(queryString, values)
    .then(() => next())
    .catch((err: any) => next(err));
};

module.exports = postController;
