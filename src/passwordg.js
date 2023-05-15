//******************** GET ELEMENTS ********************
let myLengthNum = document.getElementById("length-as-num");
let myRange = document.getElementById("num-leng-opt");
let upperInp = document.getElementById("upper-opt");
let lowerInp = document.getElementById("lower-opt");
let numInp = document.getElementById("num-opt");
let symInp = document.getElementById("sym-opt");
let passRes = document.getElementById("pass-res");
let cpyBtn = document.getElementById("cpy-btn");
let msgCpy = document.getElementById("msg");
let submitBtn = document.getElementById("submit");
let showResDiv = document.getElementById("show-res")

let backBtn = document.getElementById("back-btn");
let back = document.getElementById("back");
let openBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");

back.onclick = ()=>{
    back.classList.toggle("high-width") 
    openBtn.classList.toggle("dis-non")
    closeBtn.classList.toggle("dis-act")
    setTimeout(function() {
        backBtn.classList.toggle("active-display")
    }, 500);
}
backBtn.onclick = ()=>{
    window.location.href = "home.html";
}



// Add And Remove a Value From input on click *****

// UpperCase Input Onclick ************************
upperInp.onclick = function(){
    if(upperInp.hasAttribute("value")){
        upperInp.removeAttribute("value")
    }else{
        upperInp.setAttribute("value", "uppercase");
    }
}

// LowerCase Input Onclick ************************
lowerInp.onclick = function(){
    if(lowerInp.hasAttribute("value")){
    lowerInp.removeAttribute("value");
    }else{
    lowerInp.setAttribute("value", "lowercase");
    }
}

// Number Input Onclick ***************************
numInp.onclick = function(){
    if(numInp.hasAttribute("value")){
        numInp.removeAttribute("value")
    }else{
        numInp.setAttribute("value", "numbers");
    }
}

// Symbols Input Onclick **************************
symInp.onclick = function(){
    if(symInp.hasAttribute("value")){
        symInp.removeAttribute("value");
    }else{
        symInp.setAttribute("value", "symbols");
    }
}


myRange.onclick =  function(){
    myLengthNum.innerHTML = "";  // clear the previous value
    myLengthNum.append(myRange.value);
}



submitBtn.addEventListener("click", function(){
    let arrAllItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\"",":",";","'","<",",",">",".","?","/"];
    let myNewArr = [];

//************************ If Uppercase Checked Only ************************
    if(upperInp.value === "uppercase" && lowerInp.value !== "lowercase" && numInp.value !== "numbers" && symInp.value !== "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return  (typeof ele !== 'number' || isNaN(ele)) &&  (typeof ele !== 'string' || /[A-Z]/.test(ele));
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If LowerCase Checked Only ************************
    }else if(upperInp.value !== "uppercase" && lowerInp.value === "lowercase" && numInp.value !== "numbers" && symInp.value !== "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return  (typeof ele !== 'number' || isNaN(ele)) &&  (typeof ele !== 'string' || /[a-z]/.test(ele));
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Numbers Checked Only ************************
    }else if(upperInp.value !== "uppercase" && lowerInp.value !== "lowercase" && numInp.value === "numbers" && symInp.value !== "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return typeof ele === "number";
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Symbols Checked Only ************************
    }else if(upperInp.value !== "uppercase" && lowerInp.value !== "lowercase" && numInp.value !== "numbers" && symInp.value === "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return !/[a-zA-Z0-9]/.test(ele);
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Upper && Lower Checked ************************
    }else if(upperInp.value === "uppercase" && lowerInp.value === "lowercase" && numInp.value !== "numbers" && symInp.value !== "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return !/[0-9\W_]/.test(ele);
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Upper && Numbers Checked ************************
    }else if(upperInp.value === "uppercase" && lowerInp.value !== "lowercase" && numInp.value === "numbers" && symInp.value !== "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return (typeof ele === 'number' ||  /^[A-Z]$/.test(ele));
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Upper && Symbols Checked ************************
    }else if(upperInp.value === "uppercase" && lowerInp.value !== "lowercase" && numInp.value !== "numbers" && symInp.value === "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return (typeof ele === 'string' &&  /^[~`!@#\$%\^&\*\(\)\_\-+=\{\[\}\]|\\"':;<,>\.\?\/A-Z]$/.test(ele));
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Lower && Numbers Checked ************************
    }else if(upperInp.value !== "uppercase" && lowerInp.value === "lowercase" && numInp.value === "numbers" && symInp.value !== "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return (typeof ele === 'number' ||  /^[a-z]$/.test(ele));
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Lower && Symbols Checked ************************
    }else if(upperInp.value !== "uppercase" && lowerInp.value === "lowercase" && numInp.value !== "numbers" && symInp.value === "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return (typeof ele === 'string' &&  /^[~`!@#\$%\^&\*\(\)\_\-+=\{\[\}\]|\\"':;<,>\.\?\/a-z]$/.test(ele));
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Number && Symbols Checked ************************
    }else if(upperInp.value !== "uppercase" && lowerInp.value !== "lowercase" && numInp.value === "numbers" && symInp.value === "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return (typeof ele === 'number' ||  /^[~`!@#\$%\^&\*\(\)\_\-+=\{\[\}\]|\\"':;<,>\.\?]$/.test(ele));
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Upper && Lower && Numbers Checked ************************
    }else if(upperInp.value === "uppercase" && lowerInp.value === "lowercase" && numInp.value === "numbers" && symInp.value !== "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return ( typeof ele === 'number' || /^[a-zA-Z]$/.test(ele));
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Upper && Number && Symbols Checked ************************
    }else if(upperInp.value === "uppercase" && lowerInp.value !== "lowercase" && numInp.value === "numbers" && symInp.value === "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return ( /[A-Z]/.test(ele) || /[0-9]/.test(ele) || /[~`!@#\$%\^&\*\(\)\-\+=\{\}\[\]\\|;':\"<>,\.\?\/]/.test(ele)) ;
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Upper && Lower && Symbols Checked ************************
    }else if(upperInp.value === "uppercase" && lowerInp.value === "lowercase" && numInp.value !== "numbers" && symInp.value === "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return ( /[A-Z]/.test(ele) || /[a-z]/.test(ele) || /[~`!@#\$%\^&\*\(\)\-\+=\{\}\[\]\\|;':\"<>,\.\?\/]/.test(ele)) ;
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Lower && Number && Symbols Checked ************************
    }else if(upperInp.value !== "uppercase" && lowerInp.value === "lowercase" && numInp.value === "numbers" && symInp.value === "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return ( /[0-9]/.test(ele) || /[a-z]/.test(ele) || /[~`!@#\$%\^&\*\(\)\-\+=\{\}\[\]\\|;':\"<>,\.\?\/]/.test(ele)) ;
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);

//************************ If Upper && Lower && Numbers && Sumbols Checked ************************
    }else if(upperInp.value === "uppercase" && lowerInp.value === "lowercase" && numInp.value === "numbers" && symInp.value === "symbols"){
        let arrWithout = arrAllItems.filter(function(ele) {
            return ele ;
        });
        for (let i=0; i< myRange.value; i++){
            let randomIndex = Math.floor(Math.random() * arrWithout.length);
            myNewArr.push(arrWithout[randomIndex]);
        }
        myLengthNum.innerHTML = "";
        myLengthNum.append(myRange.value);
        let passSugs = myNewArr.join("");
        passRes.innerHTML = "";
        passRes.append(passSugs);
    }

    if (+myRange.value < 5) {
        showResDiv.style.cssText = "background-color: #b71a1a";
    } else if (+myRange.value >= 5 && +myRange.value < 15) {
        showResDiv.style.cssText = "background-color: rgb(243, 75, 53) ";
    } else if (+myRange.value >= 15  && +myRange.value < 20) {
        showResDiv.style.cssText = "background-color: rgb(243, 186, 53) ";
    } else if (+myRange.value >= 20  && +myRange.value < 30) {
        showResDiv.style.cssText = "background-color: rgb(189, 243, 53) ";
    } else if(+myRange.value >=30){
        showResDiv.style.cssText = "background-color: rgb(72, 243, 53) ";
    }


});

// Copy Button  ***************************************************************************************
cpyBtn.addEventListener("click", function(){
    passRes.select();
    document.execCommand("copy");
    msgCpy.classList.toggle("msg-cla")
});

