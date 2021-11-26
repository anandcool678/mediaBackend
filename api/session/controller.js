const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const Session = require('./model');
// const multer = require('multer');
 const path = require('path');
const { get } = require('http');



// @route: /api/v1/session
// @req-type: POST
// @description: Add new Session

exports.addSession = asyncHandler(async(req, res, next) =>{
  
  const body ={
    sessionName: req.body.sessionName,
    sessionUrl: req.body.sessionUrl,
    participantsCount: req.body.participantsCount,
    domain:req.body.domain
}  

    const session = await Session.create(body);
    return res.status(200).json({
    success: true,
    message: `Session added successfully`,
    session
    })
  

});


// @route: /api/v1/session
// @req-type: GET
// @description: get all sessions

exports.getSessions = asyncHandler(async(req,res,next)=>{
    const sessions = await Session.find({}).sort({_id:-1}).limit(30);
    return res.status(200).json({
        success: true,
        count: sessions.length,
        sessions
    })
});

//@route: /api/v1/session/sessionName
// @req-type: GET
// @description : Get job by session Name
exports.getSession = asyncHandler(async(req, res, next)=>{
    const session = await Session.find({sessionName: req.params.sessionName});
    return res.status(200).json({
        success: true,
        count: session.length,
        session
    });
});


