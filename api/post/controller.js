const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const Post = require('./model');
const User = require('../user/model');
// const multer = require('multer');
 const path = require('path');
const { get } = require('http');



// @route: /api/v1/post
// @req-type: POST
// @description: Add new Post

exports.addPost = asyncHandler(async(req, res, next) =>{
  
  // return res.status(200).json({
  //   success: true,
  //   message: `File added successfully`,
    
  //   })
  const body ={
    username: req.body.username,
    content: req.body.content,
    media: req.body.media,
    domain: req.body.domain,
}  

    const post = await Post.create(body);
    return res.status(200).json({
    success: true,
    message: `Post added successfully`,
    post
    })
  

});


// @route: /api/v1/post
// @req-type: GET
// @description: get all posts

exports.getPosts = asyncHandler(async(req,res,next)=>{
    const posts = await Post.find({}).sort({_id:-1}).limit(30);
    return res.status(200).json({
        success: true,
        count: posts.length,
        posts
    })
});

//@route:
// @req-type: GET
// @description : Get notice by username
exports.getPost = asyncHandler(async(req, res, next)=>{
    const post = await Post.find({title: req.params.username});
    return res.status(200).json({
        success: true,
        post
    });
});


