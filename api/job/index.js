const express = require('express');
const {addJob,getJobs,getJob} = require('./controller');

const router = express.Router();
router.route('/').post(addJob).get(getJobs);
router.route('/companyName').get(getJob);



module.exports = router;