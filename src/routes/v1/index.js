const express = require('express');

const { InfoController } = require('../../controllers');
const { AuthRequestMiddleawres } = require('../../middlewares');
const userRouter = require('./user-routes');

const router = express.Router();

router.get('/info', AuthRequestMiddleawres.checkAuth, InfoController.info);
router.use('/user', userRouter);

module.exports = router;