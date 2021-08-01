// var secret_api_key = "aa13099c2c810761d8793e0f517d1466"
var key = "aa13099c2c810761d8793e0f517d1466";
var cityName = document.querySelector("#city-name"); // querySelector -> cna be used for id or classes or element tags
console.log(cityName.value);

var cityHistoryEl = document.querySelector("city-search-history");
var cityCounter = 0;

// get user weather function
var getUserWeather = function() {

    console.log("https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&units=imperial&appid=" + key)
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&units=imperial&appid=" + key)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {

        // moment() to get the current date
         function updateTime() {
            currentTime = moment().format('L');
            dateOne = moment().add(1, 'days').format('L');
            dateTwo = moment().add(2, 'days').format('L');
            dateThree = moment().add(3, 'days').format('L');
            dateFour = moment().add(4, 'days').format('L');
            dateFive = moment().add(5, 'days').format('L');
          
        }
        updateTime()

        // fetching City Name, Current date, weather img
        var cityIconResultSpan = document.querySelector("#city-icon-result");
        cityIconResultSpan.textContent = "";

        var cityImg = data.weather[0].icon;
        var cityImg2 = document.createElement("img");
        

        var iconLink1 = "https://openweathermap.org/img/w/" + cityImg + ".png";
        cityImg2.setAttribute('src', iconLink1);
        cityIconResultSpan.appendChild(cityImg2);

        var cityNameResultSpan = document.querySelector("#city-name-result");
        cityNameResultSpan.textContent = data.name + " (" + (currentTime) + ")";

        // setting lon & lat to get information for 5 days forecast
        var lon = data.coord.lon;
        var lat = data.coord.lat;



        // fetching 2nd time to obtain 5 day forecast using lon and lat
        console.log("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + key);
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + key)
        .then(function (response) {
            return response.json();
        })
        .then(function(data2) {

            // fetching temp, humi, wind, UV
            var tempSpan = document.querySelector("#temperature");
            tempSpan.textContent = "Temperature: " + Math.trunc(data2.current.temp) + " ℉";

            var humiSpan = document.querySelector("#humidity");
            humiSpan.textContent = "Humidity: " + data2.current.humidity + "%";

            var windSpeedSpan = document.querySelector("#wind-speed");
            windSpeedSpan.textContent = "Wind Speed: " + data2.current.wind_speed + " MPH";

            
            var uvIndexSpan = document.querySelector("#uv-index");
            uvIndexSpan.textContent = "UV Index: " + data2.current.uvi;

            // setting color alert base on UV index 

            var uvControl = data2.current.uvi;
            
            if (uvControl < 3) {
                uvIndexSpan.style.backgroundColor = "green", uvIndexSpan.style.color = "white";
            } else if (uvControl >=3 & uvControl <=6) {
                uvIndexSpan.style.backgroundColor = "yellow", uvIndexSpan.style.color = "blue";
            } else {
                uvIndexSpan.style.backgroundColor = "red", uvIndexSpan.style.color = "white";
            }


            // Starting Forecast for next 5 days ----------------------------->


            // forecast day 1
            var forecastOneDivEl = document.querySelector("#forecast-1");
            // clear results for next search
            forecastOneDivEl.textContent = "";
            var forecastOneDateEl = document.createElement("h5");
            var forecastOneIcon = document.createElement("img")
            var forecastOneTempEl = document.createElement("p");
            var forecastOneWindEl = document.createElement("p");
            var forecastOneHumidEl = document.createElement("p");

            forecastOneDateEl.textContent = dateOne;
            var forecastOneImg = data2.daily[0].weather[0].icon;
            var forecastOneLink = "https://openweathermap.org/img/w/" + forecastOneImg + ".png";
            forecastOneIcon.setAttribute("src", forecastOneLink);
            forecastOneTempEl.textContent = "Temp: " + Math.trunc(data2.daily[0].temp.max) + " ℉";
            forecastOneWindEl.textContent = "Wind: " + data2.daily[0].wind_speed + " MPH";
            forecastOneHumidEl.textContent = "Humidity: " + data2.daily[0].humidity + "%";

            forecastOneDivEl.appendChild(forecastOneDateEl);
            forecastOneDivEl.appendChild(forecastOneIcon);
            forecastOneDivEl.appendChild(forecastOneTempEl);
            forecastOneDivEl.appendChild(forecastOneWindEl);
            forecastOneDivEl.appendChild(forecastOneHumidEl);


            // forecast day 2
            var forecastTwoDivEl = document.querySelector("#forecast-2");
            forecastTwoDivEl.textContent = "";
            var forecastTwoDateEl =  document.createElement("h5");
            var forecastTwoIcon = document.createElement("img")
            var forecastTwoTempEl = document.createElement("p");
            var forecastTwoWindEl = document.createElement("p");
            var forecastTwoHumidEl = document.createElement("p");

            forecastTwoDateEl.textContent = dateTwo;
            var forecastTwoImg = data2.daily[1].weather[0].icon;
            var forecastTwoLink = "https://openweathermap.org/img/w/" + forecastTwoImg + ".png";
            forecastTwoIcon.setAttribute("src", forecastTwoLink);
            forecastTwoTempEl.textContent = "Temp: " + Math.trunc(data2.daily[1].temp.max) + " ℉";
            forecastTwoWindEl.textContent = "Wind: " + data2.daily[1].wind_speed + " MPH";
            forecastTwoHumidEl.textContent = "Humidity: " + data2.daily[1].humidity + "%";

            forecastTwoDivEl.appendChild(forecastTwoDateEl);
            forecastTwoDivEl.appendChild(forecastTwoIcon);
            forecastTwoDivEl.appendChild(forecastTwoTempEl);
            forecastTwoDivEl.appendChild(forecastTwoWindEl);
            forecastTwoDivEl.appendChild(forecastTwoHumidEl);


            // forecast day 3
            var forecastThreeDivEl = document.querySelector("#forecast-3");
            forecastThreeDivEl.textContent = "";
            var forecastThreeDateEl =  document.createElement("h5");
            var forecastThreeIcon = document.createElement("img");
            var forecastThreeTempEl = document.createElement("p");
            var forecastThreeWindEl = document.createElement("p");
            var forecastThreeHumidEl = document.createElement("p");

            forecastThreeDateEl.textContent = dateThree;
            var forecastThreeImg = data2.daily[2].weather[0].icon;
            var forecastThreeLink = "https://openweathermap.org/img/w/" + forecastThreeImg + ".png";
            forecastThreeIcon.setAttribute("src", forecastThreeLink);
            forecastThreeTempEl.textContent = "Temp: " + Math.trunc(data2.daily[2].temp.max) + " ℉";
            forecastThreeWindEl.textContent = "Wind: " + data2.daily[2].wind_speed + " MPH";
            forecastThreeHumidEl.textContent = "Humidity: " + data2.daily[2].humidity + "%";

            
            forecastThreeDivEl.appendChild(forecastThreeDateEl);
            forecastThreeDivEl.appendChild(forecastThreeIcon);
            forecastThreeDivEl.appendChild(forecastThreeTempEl);
            forecastThreeDivEl.appendChild(forecastThreeWindEl);
            forecastThreeDivEl.appendChild(forecastThreeHumidEl);

            // forecast day 4
            var forecastFourDivEl = document.querySelector("#forecast-4");
            forecastFourDivEl.textContent = "";
            var forecastFourDateEl =  document.createElement("h5");
            var forecastFourIcon = document.createElement("img");
            var forecastFourTempEl = document.createElement("p");
            var forecastFourWindEl = document.createElement("p");
            var forecastFourHumidEl = document.createElement("p");

            forecastFourDateEl.textContent = dateFour;
            var forecastFourImg = data2.daily[3].weather[0].icon;
            var forecastFourLink = "https://openweathermap.org/img/w/" + forecastFourImg + ".png";
            forecastFourIcon.setAttribute("src", forecastFourLink);
            forecastFourTempEl.textContent = "Temp: " + Math.trunc(data2.daily[3].temp.max) + " ℉";
            forecastFourWindEl.textContent = "Wind: " + data2.daily[3].wind_speed + " MPH";
            forecastFourHumidEl.textContent = "Humidity: " + data2.daily[3].humidity + "%";

            
            forecastFourDivEl.appendChild(forecastFourDateEl);
            forecastFourDivEl.appendChild(forecastFourIcon);
            forecastFourDivEl.appendChild(forecastFourTempEl);
            forecastFourDivEl.appendChild(forecastFourWindEl);
            forecastFourDivEl.appendChild(forecastFourHumidEl);

            // forecast day 5
            var forecastFiveDivEl = document.querySelector("#forecast-5");
            forecastFiveDivEl.textContent = "";
            var forecastFiveDateEl =  document.createElement("h5");
            var forecastFiveIcon = document.createElement("img");
            var forecastFiveTempEl = document.createElement("p");
            var forecastFiveWindEl = document.createElement("p");
            var forecastFiveHumidEl = document.createElement("p");

            forecastFiveDateEl.textContent = dateFive;
            var forecastFiveImg = data2.daily[4].weather[0].icon;
            var forecastFiveLink = "https://openweathermap.org/img/w/" + forecastFiveImg + ".png";
            forecastFiveIcon.setAttribute("src", forecastFiveLink);
            forecastFiveTempEl.textContent = "Temp: " + Math.trunc(data2.daily[4].temp.max) + " ℉";
            forecastFiveWindEl.textContent = "Wind: " + data2.daily[4].wind_speed + " MPH";
            forecastFiveHumidEl.textContent = "Humidity: " + data2.daily[4].humidity + "%";
           
            forecastFiveDivEl.appendChild(forecastFiveDateEl);
            forecastFiveDivEl.appendChild(forecastFiveIcon);
            forecastFiveDivEl.appendChild(forecastFiveTempEl);
            forecastFiveDivEl.appendChild(forecastFiveWindEl);
            forecastFiveDivEl.appendChild(forecastFiveHumidEl);

            // clear city search name after click
            cityName.value = "";


            // make list of current search cities
            var citylistHistoryEl = document.querySelector("#city-search-history");

            var cityListEl = document.createElement("li");
            cityListEl.textContent = data.name;
            cityListEl.className = "city-history-btn";
            cityListEl.setAttribute("id", cityCounter);
            cityCounter++;
            citylistHistoryEl.appendChild(cityListEl);
        });
    });
};


var weatherButton = document.getElementById("btn-weather");
weatherButton.addEventListener("click", getUserWeather);
