// This is Login page function
document.getElementById("login-btn")
.addEventListener("click", function(){
    const inputUsername = document.getElementById("input-username");
    const username = inputUsername.value;
    
    const inputPassword = document.getElementById("input-password");
    const password = inputPassword.value;

    if(username === "admin" && password === "admin123"){
        window.location.assign("home.html");
    }else if(username !== "admin" && password !== "admin123"){
        alert("login Failed");
    }else if(username !== "admin"){
        alert("Invalid Username");
    }else if(password !== "admin123"){
        alert("Invalid Password");
    }
})