//import models from /db
//routes go here

const router = require("express").Router()
const {Campus, Student} = require('../db')

router.get('/api/campuses', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      include: [Student],
      Student
    });
    res.send(campuses);
  
  }
  catch (error) {
    next(error)
  }
})

router.get('/api/students', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: [Campus],
    })
    
    res.json(students);
  }
  catch (error) {
    next(error)
  }
})

router.get('/api/campuses/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    
    const campus = await Campus.findOne({
      where: {
        id
      },
      include: [Student]
    });
    
    res.json(campus);
  }
  catch (error) {
    next(error)
  }
})

router.get('/api/students/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const student = await Student.findOne({
      where: {
        id
      },
      include: [Campus]
    });
    
    res.json(student);
  }
  catch (error) {
    next(error)
  }
})

module.exports = router
