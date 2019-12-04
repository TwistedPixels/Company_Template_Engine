//Required constructors
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//Required NPMs
const axios = require('axios');
const Inquirer = require ("inquirer");
const Jest = require ('jest');
//Initial arrays
const managerArr = [];
const engineerArr = [];
const internArr = [];
const employeeInfo = [];
//Document values


//Document questions
const adminChoices = [
    {
        type: "list",
        message: "Would you like to:",
        name: "adminchoice",
        choices: [
            'Add an employee to the team?',
            'Create the team HTML page?'
        ]
    }
]

const adminQuestions = [
    {
        type: "input",
        message: "Hello manager, what is your name?",
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
        type: "confirm",
        message: "Are you a manager?",
        name: "position",
        choices: [
            'Yes',
            'No'
        ]
    }
];

const questions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employee's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the employee's email?",
        name: "email"
    },
    {
        type: "list",
        message: "What is the employee's title?",
        name: "title",
        choices: [
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
        message: "What is the employee's username?",
        name: "gitname"
    }

];

const internQuestion = [
    {
        type: "input",
        message: "What school did the employee go to?",
        name: "school"
    }

];

let start =
async function adminStart() {

   await Inquirer
    .prompt(adminQuestions)

    .then(async function (userData){
        let managerInfo = {
            'name': userData.name,
            'id': JSON.parse(userData.id),
            'email': userData.email,
            'role' : 'employee', //default setting
            'title': 'manager',
            'officeNumber': '',
            'gitname' : '',
            'GitHub' : '',
            'school': ''

       }
        if (position = true){
            employeeInfo.push(managerInfo)
            newemp()
        }
    })
}

let next =
async function adminNext(){
        await Inquirer
        .prompt(adminChoices)
        .then(async function (userData){
            if (userData.adminChoice = 'Add an employee to the team?'){
                input()
            }
            if (userData.adminChoice = 'Create the team HTML page?'){
                createteam()
            }  
        })
};

function reset(){
    employeeInfo.length = 0;
    next()
}

let input =
async function init() {
        // employeeInfo = [];
        await Inquirer
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
                 'GitHub' : '',
                 'school': ''
            }
            employeeInfo.push(userInfo)
            newemp()
        })

};

let newemp = 
async function employeeprofile(){
    const name = employeeInfo[0].name;
    const id = employeeInfo[0].id;
    const email = employeeInfo[0].email;
    const role = employeeInfo[0].role

    const employee = new Employee(name, id, email, role)
    console.log(employee)
    classdir()
};

let classdir = 
async function bytitle(){

        if (employeeInfo[0].title === "manager"){
        buildManager()
        }
        if (employeeInfo[0].title === "engineer"){
        buildEngineer()
        }
        if (employeeInfo[0].title === "intern"){
        buildIntern()
        }
};

async function buildManager(){

    await Inquirer
    .prompt(managerQuestion)

    .then(async function (userData){
        let managerAns = {
             'officeNumber': JSON.parse(userData.officeNumber)
        }

        employeeInfo[0].officeNumber = managerAns.officeNumber;

    })   

    const manager = new Manager()

    managerArr.push(manager)
    // employeeInfo = [];
    reset()
};

async function buildEngineer(){
    await Inquirer
    .prompt(engineerQuestion)

        .then(async function (userData){
            let engineerInfo = {
            'gitname': userData.gitname
            }
            employeeInfo[0].gitname = engineerInfo.gitname;
        })  
            .then(async function (userData) { 

                const gitname = employeeInfo[0].gitname;
                let queryURL = 'https://api.github.com/users/' + gitname;
                axios
                    .get(queryURL).then(async function (response) {

                        const engineerInfo = {
                            "username": response.data.name,
                            "GitHub": response.data.html_url,
                        }
                        employeeInfo[0].GitHub = engineerInfo.GitHub;

                        console.log(employeeInfo)
                    })
            })
   
const engineer = new Engineer()
engineerArr.push(engineer)

reset()
};

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
const intern = new Intern();
internArr.push(intern)

reset()
};

createteam = 
async function teamHTML(){
    

}



start()
