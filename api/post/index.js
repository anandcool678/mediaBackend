const express = require('express');
const {addPost,getPosts,getPost} = require('./controller');

const router = express.Router();
router.route('/').post(addPost);
router.route('/').get(getPosts);
router.route('/getPost').get(getPost);



module.exports = router;