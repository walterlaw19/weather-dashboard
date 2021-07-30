
var key = secret_api_key;
var cityName = document.querySelector("#city-name"); // querySelector -> cna be used for id or classes or element tags

console.log(cityName.value)

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

         function updateTime() {
            currentTime = moment().format('L');
            dateOne = moment().add(1, 'days').format('L');
            dateTwo = moment().add(2, 'days').format('L');
            dateThree = moment().add(3, 'days').format('L');
            dateFour = moment().add(4, 'days').format('L');
            dateFive = moment().add(5, 'days').format('L');
            // $("#currentDay").text(currentTime);
        }
        updateTime()




        var CityNameResultSpan = document.querySelector("#city-name-result");
        var CityImg = data.weather[0].icon;

        CityNameResultSpan.textContent = data.name + " (" + (currentTime) + ")" + CityImg ;

       

    
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

            // forecast day 1
            var forecastOneDivEl = document.querySelector("#forecast-1");
            var forecastOneDateEl = document.createElement("p");
    // var image create
            var forecastOneTempEl = document.createElement("p");
            var forecastOneWindEl = document.createElement("p");
            var forecastOneHumidEl = document.createElement("p");

            forecastOneDateEl.textContent = dateOne;
// image obtain
            forecastOneTempEl.textContent = "temp: " + Math.trunc(data2.daily[0].temp.max) + " ℉";
            forecastOneWindEl.textContent = "Wind Speed: " + data2.daily[0].wind_speed + " MPH";
            forecastOneHumidEl.textContent = "Humidity: " + data2.daily[0].humidity + "%";

            console.log(forecastOneTempEl);
            forecastOneDivEl.appendChild(forecastOneDateEl);
// append imag
            forecastOneDivEl.appendChild(forecastOneTempEl);
            forecastOneDivEl.appendChild(forecastOneWindEl);
            forecastOneDivEl.appendChild(forecastOneHumidEl);
            


            // forecast day 2
            var forecastTwoDivEl = document.querySelector("#forecast-2");
            var forecastTwoDateEl =  document.createElement("p");
            // create var image
            var forecastTwoTempEl = document.createElement("p");
            var forecastTwoWindEl = document.createElement("p");
            var forecastTwoHumidEl = document.createElement("p");

            forecastTwoDateEl.textContent = dateTwo;
            // obtain image
            forecastTwoTempEl.textContent = "temp: " + Math.trunc(data2.daily[1].temp.max) + " ℉";
            forecastTwoWindEl.textContent = "Wind Speed: " + data2.daily[1].wind_speed + " MPH";
            forecastTwoHumidEl.textContent = "Humidity: " + data2.daily[1].humidity + "%";

            console.log(forecastTwoTempEl);
            forecastTwoDivEl.appendChild(forecastTwoDateEl);
            // append imag
            forecastTwoDivEl.appendChild(forecastTwoTempEl);
            forecastTwoDivEl.appendChild(forecastTwoWindEl);
            forecastTwoDivEl.appendChild(forecastTwoHumidEl);


            // forecast day 3
            var forecastThreeDivEl = document.querySelector("#forecast-3");
            var forecastThreeDateEl =  document.createElement("p");
            // create var image
            var forecastThreeTempEl = document.createElement("p");
            var forecastThreeWindEl = document.createElement("p");
            var forecastThreeHumidEl = document.createElement("p");

            forecastThreeDateEl.textContent = dateThree;
            // obtain image
            forecastThreeTempEl.textContent = "temp: " + Math.trunc(data2.daily[2].temp.max) + " ℉";
            forecastThreeWindEl.textContent = "Wind Speed: " + data2.daily[2].wind_speed + " MPH";
            forecastThreeHumidEl.textContent = "Humidity: " + data2.daily[2].humidity + "%";

            console.log(forecastThreeTempEl);
            forecastThreeDivEl.appendChild(forecastThreeDateEl);
            // append imag
            forecastThreeDivEl.appendChild(forecastThreeTempEl);
            forecastThreeDivEl.appendChild(forecastThreeWindEl);
            forecastThreeDivEl.appendChild(forecastThreeHumidEl);






            // forecast day 4
            var forecastFourDivEl = document.querySelector("#forecast-4");
            var forecastFourDateEl =  document.createElement("p");
            // create var image
            var forecastFourTempEl = document.createElement("p");
            var forecastFourWindEl = document.createElement("p");
            var forecastFourHumidEl = document.createElement("p");

            forecastFourDateEl.textContent = dateFour;
            // obtain image
            forecastFourTempEl.textContent = "temp: " + Math.trunc(data2.daily[3].temp.max) + " ℉";
            forecastFourWindEl.textContent = "Wind Speed: " + data2.daily[3].wind_speed + " MPH";
            forecastFourHumidEl.textContent = "Humidity: " + data2.daily[3].humidity + "%";

            console.log(forecastFourTempEl);
            forecastFourDivEl.appendChild(forecastFourDateEl);
            // append imag
            forecastFourDivEl.appendChild(forecastFourTempEl);
            forecastFourDivEl.appendChild(forecastFourWindEl);
            forecastFourDivEl.appendChild(forecastFourHumidEl);






            // forecast day 5
            var forecastFiveDivEl = document.querySelector("#forecast-5");
            var forecastFiveDateEl =  document.createElement("p");
            // create var image
            var forecastFiveTempEl = document.createElement("p");
            var forecastFiveWindEl = document.createElement("p");
            var forecastFiveHumidEl = document.createElement("p");

            forecastFiveDateEl.textContent = dateFive;
            // obtain image
            forecastFiveTempEl.textContent = "temp: " + Math.trunc(data2.daily[4].temp.max) + " ℉";
            forecastFiveWindEl.textContent = "Wind Speed: " + data2.daily[4].wind_speed + " MPH";
            forecastFiveHumidEl.textContent = "Humidity: " + data2.daily[4].humidity + "%";

            console.log(forecastFiveTempEl);
            forecastFiveDivEl.appendChild(forecastFiveDateEl);
            // append imag
            forecastFiveDivEl.appendChild(forecastFiveTempEl);
            forecastFiveDivEl.appendChild(forecastFiveWindEl);
            forecastFiveDivEl.appendChild(forecastFiveHumidEl);


            // if (cityName) {
            //     getUserWeather(cityName);
            
            //     // clear old content
            //     forecastOneTempEl.textContent = "";
            //     nameInputEl.value = "";
            //   } else {
            //     alert("Please enter a GitHub username");
            //   }

            




            localStorage.setItem(JSON.stringify(CityName), data.name);
            console.log(JSON.stringify(CityName), data.name)


            var cityHistory = storage.getItem(CityNameResultSpan, data.name);
            document.getElementById("city-search-history").value = cityHistory;






            



            




            

            
        })



    });

    
};







// submit function
// var formSubmitHandler = function() {

// }

// display function
// var displayWeather = function() {






//     // TO LINK THE RESULTS TO THE NEXT PAGE
//     // for (var i = 0; i < repos.length; i++) {
//     //     // format repo name
//     //     var repoName = repos[i].owner.login + "/" + repos[i].name;
      
//     //     // create a container for each repo
//     //     var repoEl = document.createElement("a");
//     //     repoEl.classList = "list-item flex-row justify-space-between align-center";
//     //     repoEl.setAttribute("href", "./single-repo.html");
//     //     // create a span element to hold repository name

// };

// getUserWeather();

var weatherButton = document.getElementById("btn-weather");

weatherButton.addEventListener("click", getUserWeather);