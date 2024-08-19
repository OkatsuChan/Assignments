function saveUserHandler(saveUserDataRequest) {

    const userObj = new User();

    userObj.userName = saveUserDataRequest.userName;
    userObj.password = saveUserDataRequest.password;
    userObj.email = saveUserDataRequest.email;
    userObj.address = saveUserDataRequest.address;
    userObj.birthday = saveUserDataRequest.birthday;
    
 
    for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].userName === userName) {
            console.log(`User Exist: ${userName}`);
            alert(`This username: ${userName} already exist please try another one`)
            return;
        }
    }

    const user = new User(userName, password, email, address, birthday);
    this.users.push(user);
    console.log(this.users);

    alert(`Successfully created a account for username: ${userName}`)

}

