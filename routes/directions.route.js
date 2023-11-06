const {Router} = require('express');
const { directionsController } = require('../controllers/directions.controller');

const router = Router();

router.post('/direction', directionsController.addDirection);
router.get('/direction', directionsController.getDirection);


module.exports = router;