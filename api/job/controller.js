const ErrorResponse = require('../../util/errorResponse');
const asyncHandler = require('../../middleware/async');
const Job = require('./model');
// const multer = require('multer');
 const path = require('path');
const { get } = require('http');



// @route: /api/v1/job
// @req-type: POST
// @description: Add new Job

exports.addJob = asyncHandler(async(req, res, next) =>{
  
  const body ={
    companyLogo : req.body.companyLogo,
    companyName: req.body.companyName,
    companyWebsite: req.body.companyWebsite,
    companyLocation: req.body.companyLocation,
    domain:req.body.domain
}  

    const job = await Job.create(body);
    return res.status(200).json({
    success: true,
    message: `Job added successfully`,
    job
    })
  

});


// @route: /api/v1/job
// @req-type: GET
// @description: get all jobs

exports.getJobs = asyncHandler(async(req,res,next)=>{
    const jobs = await Job.find({}).sort({_id:-1}).limit(30);
    return res.status(200).json({
        success: true,
        count: jobs.length,
        jobs
    })
});

//@route:
// @req-type: GET
// @description : Get job by company Name
exports.getJob = asyncHandler(async(req, res, next)=>{
    const job = await Job.find({companyName: req.params.companyName});
    return res.status(200).json({
        success: true,
        count: job.length,
        job
    });
});


