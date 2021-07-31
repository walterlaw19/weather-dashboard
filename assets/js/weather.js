
var key = secret_api_key;
var cityName = document.querySelector("#city-name"); // querySelector -> cna be used for id or classes or element tags
console.log(cityName.value);
var cityIdCounter = 0;

// get user weather function
var getUserWeather = function() {

    
    


    console.log("https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&units=imperial&appid=" + key)
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&units=imperial&appid=" + key)
    .then(function (response) {
        return response.json();
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
        var cityimg2 = document.createElement("img");
        console.log(CityImg);

        var iconLink1 = "https://openweathermap.org/img/w/" + CityImg + ".png";
        cityimg2.setAttribute('src', iconLink1);
        CityNameResultSpan.appendChild(cityimg2);




        // var jpgImg0 = document.createElement('img');
        // var iconUrl0 = "https://openweathermap.org/img/w/" + data2.list[0].weather[0].icon + ".png";
        // jpgImg0.setAttribute('src', iconUrl0);
        //             iconTime0El.innerHTML = '';
        //             iconTime0El.appendChild(jpgImg0);

        


        CityNameResultSpan.textContent = data.name + " (" + (currentTime) + ")" + iconLink1;


        console.log(data)

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

            // var UVI = data2.current.uvi;
            
            // if (UVI < 3 ) {
            //     uvIndexSpan.style.backgroundColor= "rgb(97, 211, 240)";
            // } else if (UVI >=3 & UVI <=6) {
            //     uvIndexSpan.style.backgroundColor= "rgb(218, 231, 31)";
            // } else {
            //     uvIndexSpan.style.backgroundColor= "rgb(245, 8, 8)";
            // }



            var uvIndexSpan = document.querySelector("#uv-index");



            uvIndexSpan.textContent = "UV Index: " + data2.current.uvi;



            // forecast of 5 days --------------------------------------------
            

            // forecast day 1
            var forecastOneDivEl = document.querySelector("#forecast-1");
            forecastOneDivEl.textContent = "";
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
            forecastTwoDivEl.textContent = "";
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
            forecastThreeDivEl.textContent = "";
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
            forecastFourDivEl.textContent = "";
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
            forecastFiveDivEl.textContent = "";
            forecastFiveDivEl.style.display = "block";
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

            cityName.value = "";

            



            // storage history

        


            localStorage.setItem(JSON.stringify("CityName"), data.name);
            console.log(JSON.stringify("CityName"), data.name);

            var cityHistoryEl = document.querySelector("#city-search-history");



            var cityHistorylistEl = document.createElement("li");
            cityHistorylistEl.className = "cities";
            cityHistorylistEl.setAttribute("city-id", cityIdCounter);
            cityHistorylistEl.textContent = cityName.value;
            cityIdCounter++
            cityHistoryEl.appendChild(cityHistorylistEl);

            
   
            
            
        })
        

    });

};



var weatherButton = document.getElementById("btn-weather");

weatherButton.addEventListener("click", getUserWeather);
