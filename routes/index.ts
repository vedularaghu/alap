import * as express from 'express';

const router = express.Router();

/* Show user feeds */
router.get('/', (req:express.Request, res:express.Response) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
