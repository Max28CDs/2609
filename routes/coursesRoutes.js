const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

router.post('/courses', coursesController.createCourse);
router.get('/courses', coursesController.getCourses);
router.get('/courses/:id', coursesController.getCourseById);
router.put('/courses/:id', coursesController.updateCourse);
router.delete('/courses/:id', coursesController.deleteCourse);
module.exports = router;