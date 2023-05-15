let squOne = document.getElementById("sq-one")
let squTwo = document.getElementById("sq-two")
let squThree = document.getElementById("sq-three")
let squFour = document.getElementById("sq-four")
let squFive = document.getElementById("sq-five")
let squSix = document.getElementById("sq-six")
let squSeven = document.getElementById("sq-seven")
let squEight = document.getElementById("sq-eight")
let squNine = document.getElementById("sq-nine")
let titX = document.getElementById("title-x") //player X
let titO = document.getElementById("title-o") //player O
let resX = document.getElementById("res-x") //0 X
let resO = document.getElementById("res-o") //1 O
let startX = document.getElementById("start-x") //Start btn
let startO = document.getElementById("start-o") //Start btn
let msgBox = document.getElementById("win-msg") //Winer MSG
let square = document.getElementsByClassName("square")
let continueBtn = document.getElementById("continue")
let winMsg = document.getElementById("msg")
let back = document.getElementById("back")
let boxPlayerX = document.getElementById("playerx")
let boxPlayerO = document.getElementById("playero")
let line = document.getElementById("line")
let onlineX = document.getElementById("onlinex")
let onlineO = document.getElementById("onlineo")
let backHome = document.getElementById("back-home");
let backBtn = document.getElementById("back-btn");
let openBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");
let plusX = document.getElementById("plusx");
let plusO = document.getElementById("pluso");


backHome.onclick = ()=>{
    backHome.classList.toggle("high-width") 
    openBtn.classList.toggle("dis-non")
    closeBtn.classList.toggle("dis-act")
    setTimeout(function() {
        backBtn.classList.toggle("active-display")
    }, 500);
}
backBtn.onclick = ()=>{
    window.location.href = "home.html";
}



let resValX = +resX.textContent
let resValO = +resO.textContent
continueBtn.onclick = ()=>{
    for (let i=0; i< square.length ; i++){
        square[i].removeAttribute("done")
        square[i].removeAttribute("truex")
        square[i].removeAttribute("trueo")
        square[i].style.background = "none"
        msgBox.style.display = "none"
        back.style.display = "none"
        line.style.display= "none"
    }
}
startX.onclick = ()=> {
    startX.style.display = "none"
    startO.style.display = "none"
    onlineX.style.cssText = "display: block ";
    let squVal = true;
    function handleClick(e) {
        const btn = e.target;
        if (squVal) {
            if(btn.hasAttribute("truex") || btn.hasAttribute("trueo")){
                return
            }else{
                btn.setAttribute("truex", "true");
                btn.setAttribute("done", "true");
                squVal = false;
                btn.style.background = "url(img/xandogame/xmark.svg)";
                btn.style.cssText = "background: url(img/xandogame/vecteezy_red-prohibited-or-letter-x-icons_11459573_643.png); background-size : 80% !important";
                onlineO.style.cssText = "display: block";
                onlineX.style.cssText = "display: none ";
            }
        } else {
            if(btn.hasAttribute("truex") || btn.hasAttribute("trueo")){
                return
            }else{
                btn.setAttribute("trueo", "true");
                btn.setAttribute("done", "true");
                squVal = true;
                btn.style.background = "url(img/xandogame/vecteezy_alphabet-letter-o-green-3d-render_19776121_750.png)";
                onlineO.style.cssText = "display: none";
                onlineX.style.cssText = "display: block ";
            }
        }
        checkWinCondition()
    }
    squOne.addEventListener("click", handleClick);
    squTwo.addEventListener("click", handleClick);
    squThree.addEventListener("click", handleClick);
    squFour.addEventListener("click", handleClick);
    squFive.addEventListener("click", handleClick);
    squSix.addEventListener("click", handleClick);
    squSeven.addEventListener("click", handleClick);
    squEight.addEventListener("click", handleClick);
    squNine.addEventListener("click", handleClick);
}


startO.onclick = ()=> {
    startO.style.display = "none"
    startX.style.display = "none"
    onlineO.style.cssText = "display: block ";
    let squVal = true;
    function handleClick(e) {
        const btn = e.target;
        if (squVal) {
            if(btn.hasAttribute("truex") || btn.hasAttribute("trueo")){
                return
            }else{
                btn.setAttribute("trueo", "true");
                btn.setAttribute("done", "true");
                squVal = false;
                btn.style.background = "url(img/xandogame/vecteezy_alphabet-letter-o-green-3d-render_19776121_750.png)";
                onlineX.style.cssText = "display: block";
                onlineO.style.cssText = "display: none ";
            }
        } else {
            if(btn.hasAttribute("truex") || btn.hasAttribute("trueo")){
                return
            }else{
                btn.setAttribute("truex", "true");
                btn.setAttribute("done", "true");
                squVal = true;
                btn.style.cssText = "background: url(img/xandogame/vecteezy_red-prohibited-or-letter-x-icons_11459573_643.png); background-size : 80% !important";
                onlineO.style.cssText = "display: block";
                onlineX.style.cssText = "display: none ";
            }
        }
        checkWinCondition()
    }
    squOne.addEventListener("click", handleClick);
    squTwo.addEventListener("click", handleClick);
    squThree.addEventListener("click", handleClick);
    squFour.addEventListener("click", handleClick);
    squFive.addEventListener("click", handleClick);
    squSix.addEventListener("click", handleClick);
    squSeven.addEventListener("click", handleClick);
    squEight.addEventListener("click", handleClick);
    squNine.addEventListener("click", handleClick);
}



function checkWinCondition(){
    if(squOne.hasAttribute("truex") && squTwo.hasAttribute("truex") && squThree.hasAttribute("truex")){ // 1 2 3
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER X IS THE WINNER";
            msgBox.style.display = "flex";
            plusX.style.display = "none"
            resValX += 1
            resX.innerHTML = resValX
        }, 1000);
        plusX.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display: block; width: 90%; height: 5px; left: 5%; top: 105px;"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display: block; width: 90%; height: 5px; left: 5%; top: 70px;";
        }
    }else if(squOne.hasAttribute("truex") && squFive.hasAttribute("truex") && squNine.hasAttribute("truex")){ // 1 5 9
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER X IS THE WINNER";
            msgBox.style.display = "flex";
            plusX.style.display = "none"
            resValX += 1
            resX.innerHTML = resValX
        }, 1000);
        plusX.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display: block; width: 5px; height: 110%;top: -5%; right: 50%; transform: rotate(-45deg);"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display: block; width: 5px; height: 110%;top: -5%; right: 50%; transform: rotate(-44deg);"
        }
    }else if(squOne.hasAttribute("truex") && squFour.hasAttribute("truex") && squSeven.hasAttribute("truex")){ // 1 4 7
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER X IS THE WINNER";
            msgBox.style.display = "flex";
            plusX.style.display = "none"
            resValX += 1
            resX.innerHTML = resValX
        }, 1000);
        plusX.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display:block; width: 5px; height: 90%; top: 5%; left: 100px;"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display:block; width: 5px; height: 90%; top: 5%; left: 64px;"
        }
    }else if(squTwo.hasAttribute("truex") && squFive.hasAttribute("truex") && squEight.hasAttribute("truex")){ // 2 5 8
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER X IS THE WINNER";
            msgBox.style.display = "flex";
            plusX.style.display = "none"
            resValX += 1
            resX.innerHTML = resValX
        }, 1000);
        plusX.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display:block; width: 5px; height: 90%; top: 5%; left: 50%;"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display:block; width: 5px; height: 90%; top: 5%; left: 49%;"
        }
    }else if(squThree.hasAttribute("truex") && squFive.hasAttribute("truex") && squSeven.hasAttribute("truex")){ // 3 5 7
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER X IS THE WINNER";
            msgBox.style.display = "flex";
            plusX.style.display = "none"
            resValX += 1
            resX.innerHTML = resValX
        }, 1000);
        plusX.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display: block; width: 5px; height: 110%;top: -5%; right: 50%; transform: rotate(45deg);"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display: block; width: 5px; height: 110%;top: -5%; right: 50%; transform: rotate(44deg);"
        }
    }else if(squThree.hasAttribute("truex") && squSix.hasAttribute("truex") && squNine.hasAttribute("truex")){ // 3 6 9
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER X IS THE WINNER";
            msgBox.style.display = "flex";
            plusX.style.display = "none"
            resValX += 1
            resX.innerHTML = resValX
        }, 1000);
        plusX.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display:block; width: 5px; height: 90%; top: 5%; right: 100px;"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display:block; width: 5px; height: 90%; top: 5%; right: 64px;"
        }
    }else if(squFour.hasAttribute("truex") && squFive.hasAttribute("truex") && squSix.hasAttribute("truex")){ // 4 5 6
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER X IS THE WINNER";
            msgBox.style.display = "flex";
            plusX.style.display = "none"
            resValX += 1
            resX.innerHTML = resValX
        }, 1000);
        plusX.style.display = "block"
        back.style.display = "block";
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display: block; left: 5%; width: 90%;  height: 5px;"
    }else if(squSeven.hasAttribute("truex") && squEight.hasAttribute("truex") && squNine.hasAttribute("truex")){ // 7 8 9 
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER X IS THE WINNER";
            msgBox.style.display = "flex";
            plusX.style.display = "none"
            resValX += 1
            resX.innerHTML = resValX
        }, 1000);
        plusX.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display: block; width: 90%; height: 5px; left: 5%; bottom: 105px;"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display: block; width: 90%; height: 5px; left: 5%; bottom: 70px;";
        }
    }else if(squOne.hasAttribute("trueo") && squTwo.hasAttribute("trueo") && squThree.hasAttribute("trueo")){ // 1 2 3 //********************************************************************************************/
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER O IS THE WINNER";
            msgBox.style.display = "flex";
            plusO.style.display = "none"
            resValO += 1
            resO.innerHTML = resValO
        }, 1000);
        plusO.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display: block; width: 90%; height: 5px; left: 5%; top: 105px;"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display: block; width: 90%; height: 5px; left: 5%; top: 70px;";
        }
    }else if(squOne.hasAttribute("trueo") && squFive.hasAttribute("trueo") && squNine.hasAttribute("trueo")){ // 1 5 9
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER O IS THE WINNER";
            msgBox.style.display = "flex";
            plusO.style.display = "none"
            resValO += 1
            resO.innerHTML = resValO
        }, 1000);
        plusO.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display: block; width: 5px; height: 110%;top: -5%; right: 50%; transform: rotate(-45deg);"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display: block; width: 5px; height: 110%;top: -5%; right: 50%; transform: rotate(-44deg);"
        }
    }else if(squOne.hasAttribute("trueo") && squFour.hasAttribute("trueo") && squSeven.hasAttribute("trueo")){ // 1 4 7
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER O IS THE WINNER";
            msgBox.style.display = "flex";
            plusO.style.display = "none"
            resValO += 1
            resO.innerHTML = resValO
        }, 1000);
        plusO.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display:block; width: 5px; height: 90%; top: 5%; left: 100px;"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display:block; width: 5px; height: 90%; top: 5%; left: 64px;"
        }
    }else if(squTwo.hasAttribute("trueo") && squFive.hasAttribute("trueo") && squEight.hasAttribute("trueo")){ // 2 5 8
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER O IS THE WINNER";
            msgBox.style.display = "flex";
            plusO.style.display = "none"
            resValO += 1
            resO.innerHTML = resValO
        }, 1000);
        plusO.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display:block; width: 5px; height: 90%; top: 5%; left: 50%;"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display:block; width: 5px; height: 90%; top: 5%; left: 49%;"
        }
    }else if(squThree.hasAttribute("trueo") && squFive.hasAttribute("trueo") && squSeven.hasAttribute("trueo")){ // 3 5 7
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER O IS THE WINNER";
            msgBox.style.display = "flex";
            plusO.style.display = "none"
            resValO += 1
            resO.innerHTML = resValO
        }, 1000);
        plusO.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display: block; width: 5px; height: 110%;top: -5%; right: 50%; transform: rotate(45deg);"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display: block; width: 5px; height: 110%;top: -5%; right: 50%; transform: rotate(44deg);"
        }
    }else if(squThree.hasAttribute("trueo") && squSix.hasAttribute("trueo") && squNine.hasAttribute("trueo")){ // 3 6 9
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER O IS THE WINNER";
            msgBox.style.display = "flex";
            plusO.style.display = "none"
            resValO += 1
            resO.innerHTML = resValO
        }, 1000);
        plusO.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display:block; width: 5px; height: 90%; top: 5%; right: 100px;"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display:block; width: 5px; height: 90%; top: 5%; right: 64px;"
        }
    }else if(squFour.hasAttribute("trueo") && squFive.hasAttribute("trueo") && squSix.hasAttribute("trueo")){ // 4 5 6
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER O IS THE WINNER";
            msgBox.style.display = "flex";
            plusO.style.display = "none"
            resValO += 1
            resO.innerHTML = resValO
        }, 1000);
        plusO.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display: block; left: 5%; width: 90%;  height: 5px;"
    }else if(squSeven.hasAttribute("trueo") && squEight.hasAttribute("trueo") && squNine.hasAttribute("trueo")){ // 7 8 9 
        setTimeout(function() {
            winMsg.innerHTML = "PLAYER O IS THE WINNER";
            msgBox.style.display = "flex";
            plusO.style.display = "none"
            resValO += 1
            resO.innerHTML = resValO
        }, 1000);
        plusO.style.display = "block"
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
        line.style.cssText = "display: block; width: 90%; height: 5px; left: 5%; bottom: 105px;"
        if (window.innerWidth <= 481) {
            line.style.cssText = "display: block; width: 90%; height: 5px; left: 5%; bottom: 70px;";
        }
    }else if(squOne.hasAttribute("done") && squTwo.hasAttribute("done") && squThree.hasAttribute("done") && squFour.hasAttribute("done") && squFive.hasAttribute("done") && squSix.hasAttribute("done") && squSeven.hasAttribute("done") && squEight.hasAttribute("done") && squNine.hasAttribute("done")){
        winMsg.innerHTML = "DRAW"
        msgBox.style.display = "flex";
        back.style.display = "block"
        onlineO.style.cssText = "display: none";
        onlineX.style.cssText = "display: none ";
    }
}
