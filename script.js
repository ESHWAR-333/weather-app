const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fd85d9fbf4msh5d8784c9de3158bp121078jsn352b2c9fd6d0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const weather = (city) => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById("cloud_pct").innerHTML = response.cloud_pct
            document.getElementById("feels_like").innerHTML = response.feels_like
            document.getElementById("humidity").innerHTML = response.humidity
            document.getElementById("max_temp").innerHTML = response.max_temp
            document.getElementById("min_temp").innerHTML = response.min_temp
            // document.getElementById("sunrise").innerHTML = response.sunrise
            document.getElementById("sunset").innerHTML = response.sunset
            document.getElementById("temp").innerHTML = response.temp
            document.getElementById("wind_degrees").innerHTML = response.wind_degrees
            document.getElementById("wind_speed").innerHTML = response.wind_speed
            document.getElementById("humidity1").innerHTML = response.humidity
            document.getElementById("temp1").innerHTML = response.temp
            document.getElementById("wind_speed1").innerHTML = response.wind_speed
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


