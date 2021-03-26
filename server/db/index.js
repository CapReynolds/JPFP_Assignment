//import your db
//import your models

//state your model associations (hasOne etc)

//export your db and Models (so they all can be imported from a single central location)
const db = require('./db');
const Campus = require('./models/Campus');
const Student = require('./models/Student');

Campus.hasMany(Student, {foreignKey: 'student_id'});
Student.belongsTo(Campus, {foreignKey: 'campus_id'});

module.exports = {
    Campus,
    Student,
    db
}