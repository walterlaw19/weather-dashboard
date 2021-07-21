var userFormEl = document.querySelector("#user-form");

// get user weather function
var getUserWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=aa13099c2c810761d8793e0f517d1466")
    .then(function (response) {
        if(response.ok) {
            response.json().then(function(data) {
                displayWeather(data.user);
            })
        }
    })
    console.log("get weather");
};

// submit function
var formSubmitHandler = function() {

}

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

getUserWeather();


userFormEl.addEventListener("submit", formSubmitHandler);