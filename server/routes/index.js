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

module.exports = router
