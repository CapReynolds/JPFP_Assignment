//import your db
//import your models

//state your model associations (hasOne etc)

//export your db and Models (so they all can be imported from a single central location)
const db = require('./db');
const Campus = require('./models/Campus');
const Student = require('./models/Student');

Campus.hasMany(Student);
Student.belongsTo(Campus);
//Student.hasOne(Campus, {constraints: false});

module.exports = {
    Campus,
    Student,
    db
}