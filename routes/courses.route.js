const {Router} = require('express');
const { coursesController } = require('../controllers/courses.controller');

const router = Router();

router.post('/course', coursesController.addCourse);
router.get('/course', coursesController.getCourse);

module.exports = router;