
var key = secret_api_key;
var cityName = document.querySelector("#city-name"); // querySelector -> cna be used for id or classes or element tags
console.log(cityName.value);

var cityHistoryEl = document.querySelector("city-search-history");
var cityCounter = 0;

const cities = []

// get user weather function
var getUserWeather = function (searchedCity) {

    console.log("https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&units=imperial&appid=" + key)
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&units=imperial&appid=" + key)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

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

            // array of the next five days
            const nextDays = [dateOne, dateTwo, dateThree, dateFour, dateFive]

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
                .then(function (data2) {

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
                    } else if (uvControl >= 3 & uvControl <= 6) {
                        uvIndexSpan.style.backgroundColor = "yellow", uvIndexSpan.style.color = "blue";
                    } else {
                        uvIndexSpan.style.backgroundColor = "red", uvIndexSpan.style.color = "white";
                    }


                    // Starting Forecast for next 5 days ----------------------------->

                    for (let index = 0; index < 5; index++) {
                        // forecast day 1
                        var forecastOneDivEl = document.querySelector("#forecast-" + (index + 1));
                        // clear results for next search
                        forecastOneDivEl.textContent = "";
                        var forecastOneDateEl = document.createElement("h5");
                        var forecastOneIcon = document.createElement("img")
                        var forecastOneTempEl = document.createElement("p");
                        var forecastOneWindEl = document.createElement("p");
                        var forecastOneHumidEl = document.createElement("p");

                        forecastOneDateEl.textContent = nextDays[index];
                        var forecastOneImg = data2.daily[index].weather[0].icon;
                        var forecastOneLink = "https://openweathermap.org/img/w/" + forecastOneImg + ".png";
                        forecastOneIcon.setAttribute("src", forecastOneLink);
                        forecastOneTempEl.textContent = "Temp: " + Math.trunc(data2.daily[index].temp.max) + " ℉";
                        forecastOneWindEl.textContent = "Wind: " + data2.daily[index].wind_speed + " MPH";
                        forecastOneHumidEl.textContent = "Humidity: " + data2.daily[index].humidity + "%";

                        forecastOneDivEl.appendChild(forecastOneDateEl);
                        forecastOneDivEl.appendChild(forecastOneIcon);
                        forecastOneDivEl.appendChild(forecastOneTempEl);
                        forecastOneDivEl.appendChild(forecastOneWindEl);
                        forecastOneDivEl.appendChild(forecastOneHumidEl);
                    }

                    // -------------------------------------------------------------------

                    // clear city search name after click
                    cityName.value = "";

                    // if the data.name is already in the cities array, dont create anymore button
                    // otherwise, create a button for it

                    var cityAlreadySearched = cities.includes(data.name)


                    if (cityAlreadySearched) {
                        console.log('Already searched! Not creating a button!')
                    } else {

                        // make list of current search cities
                        var citylistHistoryEl = document.querySelector("#city-search-history");

                        var cityListEl = document.createElement("button");

                        cityListEl.addEventListener("click", function () {
                            getUserWeather(data.name)
                        });

                        cityListEl.textContent = data.name;
                        cityListEl.className = "city-history-btn";
                        cityListEl.id = cityCounter;
                        // cityListEl.setAttribute("id", cityCounter);
                        cityCounter++;
                        citylistHistoryEl.appendChild(cityListEl);


                        // add the city to the cities array
                        cities.push(data.name)
                    }
                });
        });
};


var weatherButton = document.getElementById("btn-weather");
weatherButton.addEventListener("click", function () {
    getUserWeather(cityName.value)
});

var cityNameHistory = document.querySelector(".city-history-btn")
