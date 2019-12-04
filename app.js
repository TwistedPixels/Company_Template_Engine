//Required constructors
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//Required NPMs
const axios = require('axios');
const Inquirer = require("inquirer");
const Jest = require('jest');
const htmlCreator = require('html-creator');
const path = require('path');
const fs = require('fs');
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
        // console.log(adminchoice)
        .then(async function (answers){

            console.log(answers.adminchoice)
            if (answers.adminchoice === 'Add an employee to the team?'){
                input()
            }
            if (answers.adminchoice === 'Create the team HTML page?'){
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
function teamHTML(){

    fs.writeFileSync('./output/team.html',
    '<DOCTYPE! HTML>' +
        '<head>' +
            '<meta charset="UTF-8">' +
            '<link rel="stylesheet" type="text/css" href="styles.css">' +
        '</head>' +
        '<body>' +
            '<header>' +
                '<h1>' + 'Company Roster' + '</h1>' +
            '</header>'
);

    // document.open('/templates/main.html')

    // const html = new htmlCreator([
    //     {
    //         type: 'head',
    //         content: [  { type: 'link', 
    //                     attributes:  { rel: 'stylesheet', href: 'style.css', type: 'text/css'},    
    //                     },
    //                     { type: 'title', content: 'Team Page' }]
    //     },
    //     {
    //         type: 'body',
    //         attributes: { style: 'padding: 1rem' },
    //         content: [
    //             {
    //                 type: 'div',
    //                 content: [
    //                     {
    //                         type: 'span',
    //                         content: 'A Button Span Deluxe',
    //                         attributes: { className: 'button' },
    //                     },
    //                     {
    //                         type: 'a',
    //                         content: 'Click here',
    //                         attributes: { href: '/path-to-infinity', target: '_blank' },
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    // ]);
     
    // html.renderHTMLToFile(path.join(__dirname + '/output/teampage.html'));

}



start()
