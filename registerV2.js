//blue print or Class structure
class ApplicationDbContext{

    constructor(servername,database,userid,password){

        // pass the data
        this.Servername = servername;
        this.Database = database;
        this.Userid = userid;
        this.Password = password;


        // User Entity
        this.Users = [];

        // Singleton
        if (ApplicationDbContext.instance) {
            return applicationDbContext.instance;
        }

        ApplicationDbContext.instance = this;

    }

}

// instantiate DB Context
var applicationDbContext = new ApplicationDbContext("DESKTOP-HOUSE\\SQLEXPRESS","SampleDB","admin","123456")



class UserManager {
    constructor(appDbContext) {
        if (UserManager.instance) {
            return userManager.instance;
        }
        this.users = [];

        UserManager.instance = this;

        // Set Db Context
        this.appDbContext = appDbContext;
      
    }    

    // holder
    Save;
    Delete;
    Get;
    Update;
    
}


class User {
    constructor(userName,password,email,address,birthday){
        this.userName = userName;
        this.password =password;
        this.email = email;
        this.address = address;
        this.birthday = birthday;
    }
}



class SaveUserRequest{
    constructor(userName,password,email,address,birthday){
        this.userName = userName;
        this.password =password;
        this.email = email;
        this.address = address;
        this.birthday = birthday;
    }
}

const userManager = new UserManager(applicationDbContext);


 userManager.Save = function(saveUserRequest) {

    const userObj = new User();

    // mapping of data to real entity
    userObj.userName = saveUserRequest.userName;
    userObj.password = saveUserRequest.password;
    userObj.email = saveUserRequest.email;
    userObj.address = saveUserRequest.address;
    userObj.birthday = saveUserRequest.birthday;

    // Add userObj in UsersDB
    userManager.appDbContext.Users.push(userObj);

    alert(`Successfully created a account for username: ${userName}`)

}


function onSaveUserData(element) {
    // instance ng Request
    const saveUserRequest = new SaveUserRequest();    

    // assign data
    saveUserRequest.userName = document.getElementById("userName").value;
    saveUserRequest.password = document.getElementById("password").value;
    saveUserRequest.email = document.getElementById("email").value;
    saveUserRequest.address = document.getElementById("address").value;
    saveUserRequest.birthday = document.getElementById("birthday").value;

    // invoke save
    userManager.Save(saveUserRequest)
}











// this.userManager = new UserManager();


// this.userManager.Save()


// const userManager = new UserManager();

// function saveUserData() {
//     userManager.saveUserData();
// }

// function deleteUserData() {
//     userManager.deleteUserData();
// }

// function getUserData() {
//     userManager.getUserData();
// }
