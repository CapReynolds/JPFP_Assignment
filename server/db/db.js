const Sequelize = require("sequelize")
//initialize your db, don't forget to include the possible heroku database URL
//export your db
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/jpfp_db',{
    logging: false,
});
module.exports = db;