let selectTag = document.getElementById("slct-cur-one");
let selectTagTwo = document.getElementById("slct-cur-two");
let valOne = document.getElementById("val-one")
let cnv = document.getElementById("cnv")
let resInfoOne = document.getElementById("res-info-one")
let resultOne = document.getElementById("res-one")
let resultTwo = document.getElementById("res-two")
let alertMsg = document.getElementById("alert")
let resOnetitle = document.getElementById("res-title-one")
let resOneValue = document.getElementById("res-val-one")
let resTwotitle = document.getElementById("res-title-two")
let resTwoValue = document.getElementById("res-val-two")
let imgOne = document.getElementById("img-one")
let imgTwo = document.getElementById("img-two")
let backBtn = document.getElementById("back-btn");
let back = document.getElementById("back");
let openBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");
let dateMsg = document.getElementById("date");

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


async function getOne(){
    const response = await fetch("https://open.er-api.com/v6/latest/USD")
    const data = await response.json()
    const jsonData = data.rates
    data.rates.SYP = 9500;
    data.rates.LBP = 11000;

    for (const currencyOne in jsonData){
        let optionsOne = document.createElement("option");
        let optionTxt = document.createTextNode(currencyOne);
        optionsOne.append(optionTxt);
        optionsOne.value = currencyOne;
        selectTag.appendChild(optionsOne);
    }

    cnv.onclick = ()=>{
        let curCodOne = selectTag.value; // USD
        let curCodTwo = selectTagTwo.value; // AED
        let curValOne = data.rates[`${curCodOne}`]; // 1
        let curValTwo = data.rates[`${curCodTwo}`]; // 3.6
        let symbolOne = curCodOne;
        let symbolTwo = curCodTwo;
        let curNameOne = curCodOne;
        let curNameTwo = curCodTwo;
        let timeData = (data.time_last_update_utc).slice(0,16) //Thu, 04 May 2023
        let timeNextData = (data.time_next_update_utc).slice(0,16) //Fri, 05 May 2023
        imgOne.src = `https://wise.com/public-resources/assets/flags/rectangle/${curCodOne.toLowerCase()}.png`; //Flag
        imgTwo.src = `https://wise.com/public-resources/assets/flags/rectangle/${curCodTwo.toLowerCase()}.png`; //Flag

        fetch('countries.json')
        .then(response => response.json())
        .then(data => {
            for(let i=0; i<data.length; i++){
                if(data[i].currency.code === curCodOne){
                    symbolOne = data[i].currency.symbol;
                    curNameOne = data[i].currency.name
                }
                if(data[i].currency.code === curCodTwo){
                    symbolTwo = data[i].currency.symbol
                    curNameTwo = data[i].currency.name
                }
            }
            if( curNameOne === curCodOne){
                imgOne.src = "img/pyv94io4fwq61.png";
            }else if(curNameTwo === curCodTwo){
                imgTwo.src = "img/pyv94io4fwq61.png";
            }
            if(selectTag.value === selectTagTwo.value){
                alertMsg.style.cssText = "display: flex;"
                alertMsg.innerHTML = "Please Change Currency";
                resInfoOne.style.cssText = "display: none";
                dateMsg.style.cssText = "display: none";
            }else{
                let resValTwo = valOne.value / curValOne * curValTwo // Amount / RateOne * RateOne
                alertMsg.style.cssText = "display: none";
                resInfoOne.style.cssText = "display: flex";
                dateMsg.style.cssText = "display: block";
                resTwotitle.innerHTML = curNameTwo
                resTwoValue.innerHTML = `${resValTwo.toFixed(2)} ${symbolTwo}`

                if (window.innerWidth <= 481) {
                    if(resValTwo > 99 && resValTwo < 999998 ){
                        resTwoValue.style.cssText = "font-size: 25px !important;";
                        resOneValue.style.cssText = "font-size: 25px !important;";
                        resTwoValue.innerHTML = `${resValTwo.toFixed(0)} ${symbolTwo}`
                    }else if(resValTwo > 999999){
                        resTwoValue.style.cssText = "font-size: 19px !important;";
                        resOneValue.style.cssText = "font-size: 19px !important;";
                        resTwoValue.innerHTML = `${resValTwo.toFixed(0)} ${symbolTwo}`
                    }
                }
            }
            dateMsg.innerHTML = `Date: ${timeData}`
            resOneValue.innerHTML = `${valOne.value} ${symbolOne}`
            resOnetitle.innerHTML = curNameOne
        })
    }
}
getOne()


async function getTwo(){
    const response = await fetch("https://open.er-api.com/v6/latest/EUR")
    const data = await response.json()
    const jsonData = data.rates
    for (const currencyTwo in jsonData) {
        let optionsTwo = document.createElement("option");
        let optionTxtTwo = document.createTextNode(currencyTwo);
        optionsTwo.append(optionTxtTwo);
        optionsTwo.value = currencyTwo;
        selectTagTwo.appendChild(optionsTwo);
    }
}
getTwo()
