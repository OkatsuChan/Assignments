//

//instead of this
//const userArray = [];


class User {
    constructor(userName,password,email,address,birthday){
        this.userName = userName;
        this.password =password;
        this.email = email;
        this.address = address;
        this.birthday = birthday;
    }

}

class UserManager{
    constructor(){
        if(UserManager.instance)
        {
            return userManager.instance;
        }
        this.users=[];
        UserManager.instance =this;
    }

    saveUserData(){

        let userName = document.getElementById("userName").value;
        let password = document.getElementById("password").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;
        let birthday = document.getElementById("birthday").value;
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].userName === userName) {
                console.log(`User Exist: ${userName}`);
                alert(`This username: ${userName} already exist please try another one`)
                return; 
            }
        }

        const user = new User(userName,password,email,address,birthday);
        this.users.push(user);
        console.log(this.users);

        alert(`Successfully created a account for username: ${userName}`)
        
    }

    deleteUserData() {
        let userName = document.getElementById("deleteUserName").value;
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].userName === userName) {
                this.users.splice(i, 1); 
                console.log(`Deleted user: ${userName}`);
                console.log(this.users);
                alert(`Successfully deleted: ${userName}`)
                return; 
            }
        }alert(`UserName not found : ${userName}`)
        console.log(`User not found: ${userName}`);
    }

    getUserData() {
        let userName = document.getElementById("displayUserName").value;
        for  (let i=0; i< this.users.length; i++){
            if(this.users[i].userName=== userName){
                let user = this.users[i];
                alert(`
                    UserName: ${user.userName}
                    Password: ${user.password}
                    Email: ${user.email}
                    Address: ${user.address}
                    Birthday: ${user.birthday}
                    `)
                    return;
            }
        }
        alert(`UserName not found : ${userName}`);

    }
}


const userManager = new UserManager();

function saveUserData() {
    userManager.saveUserData();
}

function deleteUserData() {
    userManager.deleteUserData();
}

function getUserData() {
    userManager.getUserData();
}


// function saveUserData(){
//     let userName = document.getElementById("userName").value;
//     // jquery
//      userName =  $("#userName").val();
//      userName =  christianJSFramework("#userName").val()
  
//     let password = document.getElementById("password").value;
//     let email = document.getElementById("email").value;
//     let address = document.getElementById("address").value;
//     let birthday = document.getElementById("birthday").value;
//     let test123 = document.getElementById("birthday");


//     const tempArray = [userName,password,email,address,birthday];

//     userArray.push(tempArray);
//     console.log(userArray);

// }

// function deleteUserData() {
//     let userName = document.getElementById("deleteUserName").value;
//     for (let i = 0; i < userArray.length; i++) {
//         if (userArray[i][0] === userName) {
//             userArray.splice(i, 1); 
//             console.log(`Deleted user: ${userName}`);
//             console.log(userArray);
//             return; 
//         }
//     }alert(`UserName not found : ${userName}`)
//     console.log(`User not found: ${userName}`);
// }

// function getUserData() {
//     let userName = document.getElementById("displayUserName").value;
//     for  (let i=0; i< userArray.length; i++){
//         if(userArray[i][0]=== userName){
//             let tempArray = userArray[i];
//             alert(`
//                 UserName: ${tempArray[0]}
//                 Password: ${tempArray[1]}
//                 Email: ${tempArray[2]}
//                 Address: ${tempArray[3]}
//                 Birthday: ${tempArray[4]}
//                 `)
//                 return;
//         }
//     }
//     alert(`UserName not found : ${userName}`);
// }