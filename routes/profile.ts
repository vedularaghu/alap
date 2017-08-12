import * as express from 'express';

const router = express.Router();

/**
 * View a profile
 */
router.get('/:id', (req:express.Request, res:express.Response) => {

});

/**
 * View own profile
 */
router.get('/me', (req:express.Request, res:express.Response) => {

});

export = router;
