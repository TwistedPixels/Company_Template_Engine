const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const Inquirer = require ("inquirer");
const Jest = require ('jest');

const employeeArr = [];
const employeeInfo = [];

const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "list",
        message: "What is your title?",
        name: "title",
        choices: [
            'manager',
            'engineer',
            'intern'
        ]
    }
];

const managerQuestion = [
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }

];

const engineerQuestion = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitname"
    }

];

const internQuestion = [
    {
        type: "input",
        message: "What school do you go to?",
        name: "school"
    }

];

let input =
async function init(userInfo) {
    const idle = await Inquirer
        .prompt(questions)

        .then(async function (userData){
            let userInfo = {
                 'name': userData.name,
                 'id': JSON.parse(userData.id),
                 'email': userData.email,
                 'role' : 'employee', //default setting
                 'title': userData.title,
                 'officeNumber': '',
                 'gitname' : '',
                 'school': ''
            }
            // console.log(userInfo)
            employeeInfo.push(userInfo)
            // console.log(employeeInfo)
            return userInfo
        })
newemp()
};

let newemp = 
async function employeeprofile(){
    const name = employeeInfo[0].name;
    const id = employeeInfo[0].id;
    const email = employeeInfo[0].email;
    const role = employeeInfo[0].role

    const employee = new Employee(name, id, email, role)
    console.log(employee)
    classdir(employee)
    // return employee

};

let classdir = 
async function bytitle(input){

        if (employeeInfo[0].title === "manager"){
        console.log("you're a manager")
        buildManager()

        }
        if (employeeInfo[0].title === "engineer"){
        console.log("you're an engineer")
        buildEngineer()
            const engineer = new Engineer(employeeInfo)
        }
        if (employeeInfo[0].title === "intern"){
        console.log("you're an intern")
        buildIntern()
            const intern = new Intern(employeeInfo)
        }
};

async function buildManager(){

    await Inquirer
    .prompt(managerQuestion)

    .then(async function (userData){
        let managerInfo = {
             'officeNumber': JSON.parse(userData.officeNumber)
        }
        employeeInfo[0].officeNumber = managerInfo.officeNumber;
        console.log(employeeInfo)
    })
    const name = employeeInfo[0].name;
    const id = employeeInfo[0].id;
    const email = employeeInfo[0].email;
    const role = employeeInfo[0].title;
    const officeNumber = employeeInfo[0].officeNumber;
    
    const manager = new Manager(name, id, role, email, officeNumber)
    console.log(manager)
}

async function buildEngineer(){
    await Inquirer
    .prompt(engineerQuestion)

    .then(async function (userData){
        let engineerInfo = {
             'gitname': userData.gitname
        }
        employeeInfo[0].gitname = engineerInfo.gitname;
        console.log(employeeInfo)
    })
const engineer = new Engineer(name, id, role, email, gitname)
}

async function buildIntern(){
    await Inquirer
    .prompt(internQuestion)

    .then(async function (userData){
        let internInfo = {
             'school': userData.school
        }
        employeeInfo[0].school = internInfo.school;
        console.log(employeeInfo)
    })
const intern = new Intern(name, id, role, email, school)
}



input()


module.exports = newemp;