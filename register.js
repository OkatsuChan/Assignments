//


const userArray = [];



function saveUserData(){
    let userName = document.getElementById("userName").value;
    // jquery
     userName =  $("#userName").val();
     userName =  christianJSFramework("#userName").val()
  
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let birthday = document.getElementById("birthday").value;
    let test123 = document.getElementById("birthday");


    


    

    const tempArray = [userName,password,email,address,birthday];

    userArray.push(tempArray);
    console.log(userArray);

}

function deleteUserData() {
    let userName = document.getElementById("deleteUserName").value;
    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i][0] === userName) {
            userArray.splice(i, 1); 
            console.log(`Deleted user: ${userName}`);
            console.log(userArray);
            return; 
        }
    }alert(`UserName not found : ${userName}`)
    console.log(`User not found: ${userName}`);
}

function getUserData() {
    let userName = document.getElementById("displayUserName").value;
    for  (let i=0; i< userArray.length; i++){
        if(userArray[i][0]=== userName){
            let tempArray = userArray[i];
            alert(`
                UserName: ${tempArray[0]}
                Password: ${tempArray[1]}
                Email: ${tempArray[2]}
                Address: ${tempArray[3]}
                Birthday: ${tempArray[4]}
                `)
                return;
        }
    }
    alert(`UserName not found : ${userName}`);
}