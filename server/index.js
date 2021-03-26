//initialize app
//require morgan|volleyball, path packages
//require db from /db

//use morgan|volleyball
//use express.json()
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!

//require in your routes and use them on your api path

//404 handler

//500 handler

//set PORT

//listen

const express = require("express");
const {Campus, Student, db} = require('./db');
const app = express();
//const volleyball = require('volleyball');
const path = require('path');
const faker = require('faker');
const routes = require('./routes');

// Logging middleware
//app.use(volleyball)

// Body parsing middleware
///Users/avernon/Fullstack/Assignments/jpfp/server/public/index.html
app.use(express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname + '/assets')));
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'))
  })
//app.get('/api/campuses')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const syncAndSeed = async() => {
    try{
    await db.sync({force:true});
    let campusArr = [];
    let studentArr = [];

    let fakeCampusName;
    let fakeCampusAddress;
    let fakeCampusDescription;

    let fakeStudentFirstName;
    let fakeStudentLastName;
    let fakeStudentEmail;
    let fakeStudentGPA;

    for(let i = 0; i <10; i++)
    {
        fakeCampusName = faker.company.companyName()+ ' University';
        fakeCampusAddress = faker.address.streetAddress();
        fakeCampusDescription = faker.lorem.paragraph();

        fakeStudentFirstName = faker.name.firstName();
        fakeStudentLastName = faker.name.lastName();
        fakeStudentEmail = faker.internet.email();
        fakeStudentGPA = Math.random() * (1.5) + 2.5;

        campusArr.push(
            {
                name: fakeCampusName,
                location: fakeCampusAddress,
                description: fakeCampusDescription,
            }
        );
        studentArr.push(
            {
                firstName: fakeStudentFirstName,
                lastName: fakeStudentLastName,
                email: fakeStudentEmail,
                GPA: fakeStudentGPA,
                campusId: (Math.floor(Math.random() * 9) + 1)
            }
        );
    
    }
    const cmpus = await Promise.all(
        campusArr.map(campus => {[
            Campus.create(campus),
        ]})
    );

    const stdnt = await Promise.all(
        studentArr.map(student => {[
            Student.create(student),
        ]})
    );
    }
    catch(ex)
    {
        console.log(ex);
    }
}

app.get('/api/campuses', routes);
app.get('/api/students', routes);


const init = async() => {
    try {
        await db.authenticate();
        console.log('connected to db')
        //console.log(faker.commerce.department());
        await syncAndSeed();
        const port = process.env.PORT || 3000;

        app.listen(port, ()=>console.log(`listening on port ${port}`));
    }
    catch(ex) {
        console.log(ex);
    }
};

init();