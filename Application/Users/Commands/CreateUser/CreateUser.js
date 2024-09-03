import {UserModel} from  'Domain\Entities\UserModel.js';

const userObj = new UserModel();

//const userModel = require('../models/userModel');

class CreateUserCommand {

    execute(username, password) {


        console.log("CreateUserCommand");

        //return userModel.addUser(username, password);
    }
}

module.exports = new CreateUserCommand();

//--------------
// OLD
//--------------

// this.userManager = new UserManager();


// // Implementation
// this.userManager.Save = function(saveUserRequest) {

//     const userObj = new User();

//     // mapping of data to real entity
//     userObj.userName = saveUserRequest.userName;
//     userObj.password = saveUserRequest.password;
//     userObj.email = saveUserRequest.email;
//     userObj.address = saveUserRequest.address;
//     userObj.birthday = saveUserRequest.birthday;

//     // Add userObj in UsersDB
//     this.userManager.appDbContext.users.push(userObj);

//     alert(`Successfully created a account for username: ${userName}`)

// }

//--------------
