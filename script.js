// const input=document.querySelector('.input-box')
// const search=document.getElementById('search')
// const weather=document.querySelector('.weather-icon')
// const temperature=document.querySelector('.temp')
// const city=document.querySelector('.city')
// const humidity=document.querySelector('.humidity')
// const wind=document.querySelector('.wind')
// async function weather1(city){
//     const api_key="5d1d8dda8635cb813018517b5d42bec6"
//     url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
//     const wd=await fetch (`${url}`).then(response=>response.json())
//     // console.log(wd)
//     temperature.innerHTML=`${Math.round(wd.main.temp-273.15)}°C`
//     humidity.innerHTML=`${wd.main.humidity}%`
//     wind.innerHTML=`${wd.wind.speed}km/h`
//     city.innerHTML=`${wd.weather[0].city}`
//     switch(wd.weather[0].main){
//         case 'clouds':
//             weather.src="/images/clouds.png";
//         case 'clear':
//             weather.src="/images/clear.png";
//         case 'rain':
//             weather.src="/images/rain.png";
//         case 'mist':
//             weather.src="/images/mist.png";
//         case 'snow':
//             weather.src="/images/snow.png";
//     }
//     console.log(wd)

// }
// search.addEventListener('click',()=>{
//     weather1(input.value)
// })



// api
const api = "5d1d8dda8635cb813018517b5d42bec6"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore"
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key = "5d1d8dda8635cb813018517b5d42bec6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/images/clouds.png";
            break;
        case 'Clear':
            weather_img.src = "/images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/images/snow.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
