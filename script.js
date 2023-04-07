const options = {
    method: 'GET',
    // headers: {
    //     'X-RapidAPI-Key': 'fd85d9fbf4msh5d8784c9de3158bp121078jsn352b2c9fd6d0',
    //     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    // }
};
const apikey='0392ac5f476046523beba2f6cc9d53e4';

const weather = (city) => {
    // const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey;
     fetch(url, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            console.log(response.main.temp);
            document.getElementById("pressure").innerHTML = response.main.pressure
            document.getElementById("feels_like").innerHTML = response.main.feels_like
            document.getElementById("humidity").innerHTML = response.main.humidity
            document.getElementById("max_temp").innerHTML =Math.round((response.main.temp_max) - 273.15,3) 
            document.getElementById("min_temp").innerHTML =Math.round((response.main.temp_min) - 273.15,3)  
            // document.getElementById("sunrise").innerHTML = response.sunrise
            document.getElementById("sunset").innerHTML = response.sys.sunset
            document.getElementById("temp").innerHTML = Math.round((response.main.temp) - 273.15,3)
            document.getElementById("wind_degrees").innerHTML = response.wind.deg
            document.getElementById("wind_speed").innerHTML = response.wind.speed
            document.getElementById("humidity1").innerHTML = response.main.humidity
            document.getElementById("temp1").innerHTML = Math.round((response.main.temp) - 273.15,3)
            document.getElementById("wind_speed1").innerHTML = response.wind.speed
        })
        .catch(err => console.error(err));
}


const Submit = document.getElementById('submit');
const cityName = document.getElementById('cityName');
Submit.addEventListener('click', function (e) {
    e.preventDefault();
    
    const input = document.getElementById('input');
    const city = input.value;
    console.log(city);
    cityName.textContent = city;
    weather(city);

});

weather('Hyderabad');
cityName.textContent = 'Hyderabad';


