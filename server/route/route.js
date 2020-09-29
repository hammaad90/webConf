const express 				= require('express');
const bodyParser 			= require('body-parser');
const router  				= express.Router();
const webinarController = require('../controller/webinarController')


router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.use(function(error, req,res, next) {
	if(error) {
		res.send('invalid json');
	}
})



router.post('/create', webinarController.createWebinar);




module.exports = router;