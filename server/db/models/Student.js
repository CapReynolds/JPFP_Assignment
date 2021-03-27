const Sequelize = require("sequelize") //for things like Sequelize.STRING
//import your db

//define your model

//define any class or instance methods

//export your model
const db =require('../db');

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Must be a valid email address"
            }
        }
    },
    GPA: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    imageURL: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
    }
});

module.exports = Student;
