let btn = document.getElementById("ser-btn");
let search = document.getElementById("ser-city");
let temp = document.getElementById("temp")
let city = document.getElementById("city")
let humidity = document.getElementById("hum-val")
let windSpeed = document.getElementById("wind-val")
let weathIcon = document.getElementById("icon-weather")
let country = document.getElementById("country")
let error = document.getElementById("error")
let imgBox = document.getElementById("image-weather")
let infoBox = document.getElementById("info-tit")
let humBox = document.getElementById("humidity")
let windBox = document.getElementById("wind-speed")
let flag = document.getElementById("flag")
let detailBox = document.getElementById("detail")
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



// get ICON for Weather form API Icon code **********TEST**********
// let iconWeatherTwo = document.getElementById("icon-weathertwo")

async function getWeather(cityName){  
        //  Another API KEY'9c461913c8a8e774488a44c64d32c0db'
    
    apikey = "b8d81d3dc7e8f63e9a0761627da097e0";
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}`;

    const response = await fetch(apiUrl + `&appid=${apikey}`);

    if(response.status == 404){
        error.innerHTML = `<i class="fa-sharp fa-solid fa-circle-exclamation"></i> Invalid City Name`
        error.style.display = "block"
        imgBox.style.display = "none";
        infoBox.style.display = "none";
        detailBox.style.display = "none";
        flag.style.display = "none";
    }else if(response.status == 400){
        error.innerHTML = `<i class="fa-sharp fa-solid fa-circle-exclamation"></i> Please Enter City Name`
        error.style.display = "block"
        imgBox.style.display = "none";
        infoBox.style.display = "none";
        detailBox.style.display = "none";
        flag.style.display = "none";
    }else{
        let data = await response.json()
        // Change Weather Icon
        if(data.weather[0].main == "Clouds"){
            weathIcon.src = "img/imgweather/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weathIcon.src = "img/imgweather/clear.png"
        }else if(data.weather[0].main == "Rain"){
            weathIcon.src = "img/imgweather/rain.png"
        }else if(data.weather[0].main == "Drizzle"){
            weathIcon.src = "img/imgweather/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            weathIcon.src = "img/imgweather/mist.png"
        }else if(data.weather[0].main == "Snow"){
            weathIcon.src = "img/imgweather/snow.png"
        }else if(data.weather[0].main == "Haze"){
            weathIcon.src = "img/imgweather/haze.png"
        }else if(data.weather[0].main == "Fog"){
            weathIcon.src = "img/imgweather/fog.png"
        }


        // get ICON for Weather form API Icon code **********TEST**********
        // let srcSmallIcom = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        // iconWeatherTwo.src= srcSmallIcom;
        // get ICON for Weather form API Icon code **********TEST**********
        
        
        // Change Temp
        temp.innerHTML = Math.round(data.main.temp) + `°C`;

        //Change City Name
        let cityFullName = cityName.split(" "); // To Make All First Letter in UpperCASE
        for (let i = 0; i < cityFullName.length; i++) {
            cityFullName[i] = cityFullName[i].charAt(0).toUpperCase() + cityFullName[i].slice(1);
        }
        let cityNameUpper = cityFullName.join(' ');
        city.innerHTML =  cityNameUpper;

        //Change Country
        country.innerHTML = data.sys.country

        //Change Humidity Value
        humidity.innerHTML = data.main.humidity + `%`;

        // Change wWInd Speed
        windSpeed.innerHTML = data.wind.speed + `km/h`;

        flag.src = `https://flagsapi.com/${data.sys.country}/flat/64.png`;


        imgBox.style.display = "flex";
        infoBox.style.display = "flex";
        detailBox.style.display = "flex";
        error.style.display = "none"
        flag.style.display = "block"
        
        search.value = ""
    }
}
document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
        btn.click();
    }
});

btn.addEventListener("click", ()=>{
    getWeather(search.value)
})

