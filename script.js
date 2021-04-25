// API KEY : 6152da19b2f1bbca632bd2be018f6ee3 from OpenWeatherMap 
// devbyAB
'use strict'

let weather = {
    apiKey: "6152da19b2f1bbca632bd2be018f6ee3",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + " ° C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "Km/h";

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}


document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search input").addEventListener("keyup", function (e) {
    // e.preventDefault();
    if (e.keyCode === 13) {
        weather.search();
        // console.log("Key is Pressed");      
    }
 
});

