
class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }

     static createId(){
        return `123`
    }
}

const masidur = new user("masidur")

// console.log(masidur.createId());

class Teacher extends user{
    constructor(username ,email){
        super(username)
        this.email = email


    }
}

const samsung = new Teacher ("samsung", "samsung@gmail.com")

 console.log(samsung.createId());
 

