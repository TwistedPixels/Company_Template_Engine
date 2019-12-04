const Employee = require('./employee');//parent constructor


class Engineer extends Employee{
    constructor(name, id, email, gitname, GitHub){
        super(name, id, email);
        this.gitname = gitname;
        this.GitHub = GitHub;
}

    getGithub(){
    return this.gitname;
    }

    getRole(){
    return 'Engineer';
    }
 
}




module.exports =  Engineer;