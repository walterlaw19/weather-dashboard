// var ready = function () {

// }


var key = secret_api_key;


var cityName = document.querySelector("#city-name"); // querySelector -> cna be used for id or classes or element tags

console.log(cityName.value)
// var cityName = document.getElementById("city-name") // just for ids
// var cityName = document.getElementsByClassName("card-header") // just for class

/*

var --> vague, it can be either let or const

let ---> variables that you can change
const ---> variables that you CANNOT change

*/



// var userFormEl = document.querySelector("#user-form");

// get user weather function
var getUserWeather = function() {
    console.log("https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&units=imperial&appid=" + key)
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&units=imperial&appid=" + key)
    .then(function (response) {
        return response.json();

        // if(response.ok) {
        //     response.json().then(function(data) {
        //         displayWeather(data.lat);
        //     })
        // }
    })
    .then(function(data) {


        var CityNameResultSpan = document.querySelector("#city-name-result");
        CityNameResultSpan.textContent = data.name;

    
        // var weatherContainerEl = document.querySelector("#weather-container");
        // var weatherUserResult = document.createElement("search-result");
        // weatherUserResult.setAttribute("href", data.current);
        // weatherContainerEl.appendChild(weatherUserResult);
        // console.log(data.current.weather);

        console.log(data)

        // just get the lon and lat from the first fetch call
        var lon = data.coord.lon;
        var lat = data.coord.lat;

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + key)
        .then(function (response) {
            return response.json();
        })
        .then(function(data2) {
            console.log(data2)


            // queryselect the element
            var tempSpan = document.querySelector("#temperature");
        
            // change the text content of the element
            tempSpan.textContent = "Temperature: " + Math.trunc(data2.current.temp) + " ℉";

            var humiSpan = document.querySelector("#humidity");
            humiSpan.textContent = "Humidity: " + data2.current.humidity + "%";

            var windSpeedSpan = document.querySelector("#wind-speed");
            windSpeedSpan.textContent = "Wind Speed: " + data2.current.wind_speed + " MPH";

            var uvIndexSpan = document.querySelector("#uv-index");
            uvIndexSpan.textContent = "UV Index: " + data2.current.uvi;



            // forecast of 5 days

            var forecastOneDivEl = document.querySelector("#forecast-1");
            var forecastOneTempEl = document.createElement("div");
            // forecastOneTempEl.setAttribute("alt", data2.current.clouds);
            forecastOneTempEl.textContent = "temperature: " + Math.trunc(data2.daily[0].temp.max) + " ℉";
            console.log(forecastOneTempEl);
            forecastOneDivEl.appendChild(forecastOneTempEl);



            // forecast for Friday
            var forecastFourDivEl = document.querySelector("#forecast-4");
            var forecastFourTempEl = document.createElement("div");
            // forecastOneTempEl.setAttribute("alt", data2.current.clouds);
            forecastFourTempEl.textContent = "temperature: " + Math.trunc(data2.daily[3].temp.max) + " ℉";
            console.log(forecastFourTempEl);
            forecastFourDivEl.appendChild(forecastFourTempEl);




            




            

            
        })



    });

    // console.log("get weather");
};




// submit function
// var formSubmitHandler = function() {

// }

// display function
var displayWeather = function() {






    // TO LINK THE RESULTS TO THE NEXT PAGE
    // for (var i = 0; i < repos.length; i++) {
    //     // format repo name
    //     var repoName = repos[i].owner.login + "/" + repos[i].name;
      
    //     // create a container for each repo
    //     var repoEl = document.createElement("a");
    //     repoEl.classList = "list-item flex-row justify-space-between align-center";
    //     repoEl.setAttribute("href", "./single-repo.html");
    //     // create a span element to hold repository name

};

// getUserWeather();

var weatherButton = document.getElementById("btn-weather");

weatherButton.addEventListener("click", getUserWeather);