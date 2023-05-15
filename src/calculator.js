let zero = 0;
let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
let six = 6;
let seven = 7;
let eight = 8;
let nine = 9;
let add = " + "
let minus = " - ";
let equal = " = ";
let multi = " * ";
let divis = " / ";
let dot = ".";
//Get Elements
let resultDiv = document.getElementById("result");
let addition = document.getElementById("addition"); //+
let subtractions = document.getElementById("subtractions"); //-
let multiplications = document.getElementById("multiplications");// *
let division = document.getElementById("division"); // /
let deleteBtn = document.getElementById("deletebtn"); // Del
let clearBtn = document.getElementById("clear"); // C
let equalBtn = document.getElementById("equal"); // =
let dotBtn = document.getElementById("dot"); // .
let zeroBtn = document.getElementById("num-zero"); // 0
let oneBtn = document.getElementById("num-one"); // 1
let twoBtn = document.getElementById("num-two"); // 2
let threeBtn = document.getElementById("num-three"); // 3
let fourBtn = document.getElementById("num-four"); // 4
let fiveBtn = document.getElementById("num-five"); // 5
let sixBtn = document.getElementById("num-six"); // 6
let sevenBtn = document.getElementById("num-seven"); // 7
let eightBtn = document.getElementById("num-eight"); // 8
let nineBtn = document.getElementById("num-nine"); // 9
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



// Start Calculater Code
let printAction = [];

zeroBtn.onclick = function (){
    printAction.push(zero);
    return resultDiv.innerHTML = printAction.join("");
}
oneBtn.onclick = function (){
    printAction.push(one);
    return resultDiv.innerHTML = printAction.join("");
}
twoBtn.onclick = function (){
    printAction.push(two);
    return resultDiv.innerHTML = printAction.join("");
}
threeBtn.onclick = function (){
    printAction.push(three);
    return resultDiv.innerHTML = printAction.join("");
}
fourBtn.onclick = function (){
    printAction.push(four);
    return resultDiv.innerHTML = printAction.join("");
}
fiveBtn.onclick = function (){
    printAction.push(five);
    return resultDiv.innerHTML = printAction.join("");
}
sixBtn.onclick = function (){
    printAction.push(six);
    return resultDiv.innerHTML = printAction.join("");
}
sevenBtn.onclick = function (){
    printAction.push(seven);
    return resultDiv.innerHTML = printAction.join("");
}
eightBtn.onclick = function (){
    printAction.push(eight);
    return resultDiv.innerHTML = printAction.join("");
}
nineBtn.onclick = function (){
    printAction.push(nine);
    return resultDiv.innerHTML = printAction.join("");
}


addition.onclick = () => {
    printAction.push(add);
    return resultDiv.innerHTML = printAction.join("");
}
subtractions.onclick = () => {
    printAction.push(minus)
    return resultDiv.innerHTML = printAction.join("");
}
multiplications.onclick = () => {
    printAction.push(multi)
    return resultDiv.innerHTML = printAction.join("");
}
division.onclick = () => {
    printAction.push(divis)
    return resultDiv.innerHTML = printAction.join("");
}

equalBtn.onclick = () => {
    printAction.push(equal);
    for (let i=0; i<printAction.length; i++){
        if (printAction[i].length > 1){
            printAction.pop();
            return resultDiv.innerHTML = eval(printAction.join(""));
            continue;
        }
    }
}
dotBtn.onclick = () => {
    printAction.push(dot)
    return resultDiv.innerHTML = printAction.join("");
}
deleteBtn.onclick = () => {
    printAction.pop();
    return resultDiv.innerHTML = printAction.join("");
}
clearBtn.onclick = () => {
    printAction = printAction.splice(0, printAction.lingth);
    let newSpan = document.createElement("span");
    let txtSpan = document.createTextNode("|");
    newSpan.appendChild(txtSpan);
    resultDiv.innerHTML = printAction.join("") ;
    return resultDiv.prepend(newSpan);
}
//End Calculator Code


let darkIcon = document.getElementById("dark-icon");
let basicCont = document.querySelector(".basic-container");
let screenDiv = document.getElementById("screen");
let btnDar = document.getElementById("btn-dar-white");
let bdyCalc = document.getElementById("bdy-calc");
let btnClick = document.getElementsByClassName("btn");


darkIcon.onclick = function(){
    document.body.classList.toggle("active-dark");
    darkIcon.classList.toggle("icon-dar");
    basicCont.classList.toggle("basic-dark");
    screenDiv.classList.toggle("basic-dark");
    resultDiv.classList.toggle("basic-dark");
    bdyCalc.classList.toggle("bdy-mode");
    equalBtn.classList.toggle("equal-moode")




}




