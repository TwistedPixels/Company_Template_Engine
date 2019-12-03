const Employee = require('./employee');//parent constructor


class Engineer extends Employee{
    constructor(name, id, email, gitname){
        super(name, id, email);
        this.gitname = gitname;
}

    getGitHub(){
    return this.gitname;
    }

    getRole(){
    return 'Engineer';
    }
 
}




module.exports =  Engineer;