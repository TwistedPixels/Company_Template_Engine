const Inquirer = require ("inquirer");
const Jest = require ('jest');

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
]

async function init() {
    const idle = await Inquirer
        .prompt(questions)
        .then(async function (userData){
            let userInfo = {
                 'name': userData.name,
                 'id': userData.id,
                 'email': userData.email,
                 'title': userData.title
            }
            // exports(userData);
            employeeInfo.push(userInfo);

        }) 
    return idle
}

init()

odule.exports = employee;