const apikey="b51fe3da165a019d2e32946960f50a78";

const cityInput=document.querySelector("#cityName");
const searchBtn=document.querySelector("#search");

const cityElement=document.querySelector("#city");
const tempElement=document.querySelector("#temperature span");
const descElement=document.querySelector("#description");
const weatherIconElement=document.querySelector("#weather-icon");
const countryElement=document.querySelector("#pais");
const umidityElement=document.querySelector("#umidity span");
const windElement=document.querySelector("#wind span");

const weatherContainer=document.querySelector("#weather-data");

const getWeatherData=async(city)=>{
    const apiWeatherURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

    const res=await fetch(apiWeatherURL)
    const data=await res.json()

    return data;
}
const showWeatherData=async(city)=>{
    const data=await getWeatherData(city);
    
    cityElement.innerHTML=data.name;
    tempElement.innerHTML=parseInt(data.main.temp);
    descElement.innerHTML=data.weather[0].description;
    weatherIconElement.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src",`https://flagsapi.com/${data.sys.country}/flat/64.png`);
    umidityElement.innerHTML=`${data.main.humidity}%`;
    windElement.innerText=`${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");
}

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const city=cityInput.value;

    showWeatherData(city);
})

cityInput.addEventListener("keyup",(e)=>{
    if(e.code === "Enter"){
        const city =e.target.value
        showWeatherData(city);
    }
})