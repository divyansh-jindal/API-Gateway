const express = require('express');
const { UserController } = require('../../controllers');
const { AuthRequestMiddleawres } = require('../../middlewares');
const router = express.Router();


// console.log('Inside airplane routes');

///api/v1/signup POST
router.post('/signup', 
            AuthRequestMiddleawres.validateAuthRequest,
            UserController.signup );

///api/v1/signup POST
router.post('/signin',
            AuthRequestMiddleawres.validateAuthRequest,
            UserController.signin );

module.exports = router;