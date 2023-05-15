let subBtn = document.getElementById("submit");
let userName = document.getElementById("username");
let pass = document.getElementById("pass");
let alertTxt  = document.getElementById("alert");
let alertBox  = document.getElementById("alert-box");
let forgbtn  = document.getElementById("forg");
let createAccount  = document.getElementById("creata");
let showPas = document.getElementById("show-pass")
forgbtn.onclick = ()=>{
    window.location.href = "src/load/emptypg.html";
}
showPas.onclick = ()=>{
    if(pass.value.length > 0){
        if(pass.type === "password"){
            pass.type = "text"
            showPas.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
        }else if(pass.type === "text"){
            pass.type = "password";
            showPas.innerHTML = `<i class="fa-sharp fa-solid fa-eye"></i>`
        }
    }
}



createAccount.onclick = ()=>{
    window.location.href = "src/load/emptypg.html";
}
subBtn.onclick = (e)=> {
    e.preventDefault()
    alertBox.style.cssText = "display: flex;"
    setTimeout(function() {
        alertBox.style.cssText = "display: none;"
    }, 4000);
    if(userName.value === ""){
        alertTxt.innerHTML = "The username field is required. Please enter a username.";
    }
    if(pass.value === ""){
        alertTxt.innerHTML = "The password field is required. Please enter a password.";
    }
    if(userName.value === "" && pass.value === ""){
        alertTxt.innerHTML = "The username and password fields are required";
    }

    if(userName.value.length > 0 && pass.value.length > 0){
        if(userName.value === "Khedr123" && pass.value !== "Khedr123"){
            alertTxt.innerHTML = "Incorrect password. Please try again.";
        }
        if(pass.value === "Khedr123" && userName.value !== "Khedr123"){
            alertTxt.innerHTML = "Invalid username. Please try again.";
        }

        if(userName.value !== "Khedr123" && pass.value !== "Khedr123"){
            alertTxt.innerHTML = "Sorry, this user is not found. Please check the spelling.";
        }
        if(userName.value === "Khedr123" && pass.value === "Khedr123"){
            alertTxt.innerHTML = "";
            alertBox.style.cssText = "display: none;";
            window.location.href = "src/lod.html";
        }
    }


}