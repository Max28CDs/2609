const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

router.post('/students', studentsController.createStudent);
router.get('/students', studentsController.getStudents);
router.get('/students/:id', studentsController.getStudentById);
router.put('/students/:id', studentsController.updateStudent);
router.delete('/students/:id', studentsController.deleteStudent);

module.exports = router;
