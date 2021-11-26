const express = require('express');
const {addSession,getSessions,getSession} = require('./controller');

const router = express.Router();
router.route('/').post(addSession).get(getSessions);
router.route('/sessionName').get(getSession);



module.exports = router;