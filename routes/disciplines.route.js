const {Router} = require('express');
const { disciplinesController } = require('../controllers/disciplines.controller');

const router = Router();

router.post('/discipline', disciplinesController.addDiscipline);
router.get('/discipline', disciplinesController.getDiscipline);
router.get('/semestr/:id/:id2', disciplinesController.getSemestr);
router.get('/plans/:dirId/:courseId', disciplinesController.getPlans);


module.exports = router;