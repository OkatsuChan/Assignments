import {createUserCommand} from  'Application\Users\Commands\CreateUser\CreateUser.js';

//const createUserCommand = require('./commands/createUser');

function onSaveUserData(element) {
    // instance ng Request
    //const saveUserRequest = new SaveUserRequest();    

    // assign data
    saveUserRequest.userName = document.getElementById("userName").value;
    saveUserRequest.password = document.getElementById("password").value;
    saveUserRequest.email = document.getElementById("email").value;
    saveUserRequest.address = document.getElementById("address").value;
    saveUserRequest.birthday = document.getElementById("birthday").value;

    // invoke save
    createUserCommand.execute("","");
}
