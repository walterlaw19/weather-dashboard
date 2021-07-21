var getUserWeather = function() {
    fetch("")
    .then(function (response) {
        if(response.ok) {
            response.json().then(function(data) {
                displayWeather(data.user);
            })
        }
    })
    console.log("get weather");
};

var displayWeather = function() {

};

getUserWeather();