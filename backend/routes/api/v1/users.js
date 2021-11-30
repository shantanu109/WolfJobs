const express = require('express');

const router = express.Router();


const usersApi = require('../../../controllers/api/v1/users_api');


router.post('/create-session',usersApi.createSession);
router.post('/signup', usersApi.signUp);
router.post('/edit', usersApi.editProfile);
router.get('/search/:name', usersApi.searchUser);
router.post('/createhistory',usersApi.createHistory);
// router.get('/gethistory/:userId',usersApi.getHistory);
router.get('/gethistory',usersApi.getHistory);
router.post('/createjob',usersApi.createJob);
router.get('/',usersApi.index);
router.get('/fetchapplications',usersApi.fetchApplication);
router.post('/acceptapplication',usersApi.acceptApplication);
router.post('/rejectapplication',usersApi.rejectApplication);
router.post('/closejob',usersApi.closeJob);
router.post('/createapplication',usersApi.createApplication);

module.exports = router;
