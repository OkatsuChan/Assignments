
function gotoHome() {
 //is used to prevent the form from submitting normally, allowing the script to check the username and password first

  let userName = document.getElementById("userName").value;
  let password = document.getElementById("password").value;

  if (userName == "tian" && password == "12345") {
    window.location.href="home.html"
  } else {
    alert("Invalid username or password");
  }
  
}

