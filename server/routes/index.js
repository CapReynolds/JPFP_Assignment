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
    
    res.send(students);
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
    
    res.send(student);
  }
  catch (error) {
    next(error)
  }
})

router.post('/api/campuses', async (req, res, next) => {
  try {
    const {name, address} = req.body;
    res.status(201).send(await Campus.create({
     name,
     address
    }));
    
  }
  catch (error) {
    next(error)
  }
})

router.post('/api/students', async (req, res, next) => {
  try {
    const {firstName, lastName, email, GPA} = req.body;
    res.status(201).send(await Student.create({
      firstName,
      lastName,
      email,
      GPA
    }));
    
  }
  catch (error) {
    next(error)
  }
})

router.delete('/api/campuses/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findOne({
      where: {
        id: req.params.id
      },
      include: [Student]
    });
    var destroyed = await campus.destroy();
    res.send(destroyed);
    
  }
  catch (error) {
    next(error)
  }
})

router.delete('/api/students/:id', async (req, res, next) => {
  try {
    const student = await Student.findOne({
      where: {
        id: req.params.id
      },
      include: [Campus]
    });
    var destroyed = await student.destroy();
    res.send(destroyed);
    
  }
  catch (error) {
    next(error)
  }
})

router.post('/api/campuses/edit/', async (req, res, next) => {
  try {
    
    if(req.body.studentID != undefined)
    {
      const {studentID} = req.body;
      const updated = await Campus.update({
        students: students.filter(student=> student.id !== studentID)
      },{
        where: {
          id: req.body.id
        },
        include: [Student]
      });
  
      const campus = await Campus.findOne({
        where: {
          id: req.body.id
        },
        include: [Student]
      });
      res.send(campus); 
      
    }
    else {
      const updated = await Campus.update({
        name: req.body.name,
        address: req.body.address,
        students: req.body.students
      },{
        where: {
          id: req.body.id
        },
        include: [Student]
      });

      const campus = await Campus.findOne({
        where: {
          id: req.body.id
        },
        include: [Student]
      });
      res.send(campus); 
    }
  }
  catch (err) {
    next(err)
  }
})

router.post('/api/students/edit/', async (req, res, next) => {
  try {
    if(req.body.studentID != undefined)
    {
      
      const updated = await Student.update({
        campusId: null
      },{
        where: {
          id: req.body.studentID
        },
        include: [Campus]
      });
  
      const student = await Student.findOne({
        where: {
          id: req.body.studentID
        },
        include: [Campus]
      });
      res.send(student); 
      
    }
    else{
      const updated = await Student.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        GPA: req.body.GPA,
      },{
        where: {
          id: req.body.id
        },
        include: [Student]
      });

      const student = await Student.findOne({
        where: {
          id: req.body.id
        },
        include: [Campus]
      });
      
      res.send(student);
    }
  }
  catch (err) {
    next(err)
  }
})


module.exports = router
