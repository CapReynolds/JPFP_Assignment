const Sequelize = require("sequelize") //for things like Sequelize.STRING
//import your db

//define your model

//define any class or instance methods

//export your model
const db =require('../db');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    location: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    imageURL: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});


module.exports = Campus;
 
