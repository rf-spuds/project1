var region = navigator.language.slice(3, 5).toLowerCase();
var odds = "h2h";


var queryURL = "https://api.the-odds-api.com/v3/odds/?apiKey=" + key + "&sport=upcoming" + "&region=" + region + "&mkt=" + odds;


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
    console.log
})