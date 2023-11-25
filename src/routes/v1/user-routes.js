const express = require('express');
const { UserController } = require('../../controllers');
const router = express.Router();


// console.log('Inside airplane routes');

///api/v1/signup POST
router.post('/', 
            UserController.signup );
 

module.exports = router;