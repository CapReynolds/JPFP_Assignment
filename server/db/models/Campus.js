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
        defaultValue: 'https://tmp.jpg'
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});


module.exports = Campus;
 
