var key = "1194b7ea53a49fad946f0bc020a4d57c";

// defaults to US, but uses browser language to get bookmakers
var region = navigator.language.slice(3, 5).toLowerCase();
//Blank array for sport status location
var sportActivity;


// empty var that is updated with button click
var sport;
//special URL that returns whether sport is in or out of season.
var sportStatus = "https://api.the-odds-api.com/v3/sports/?apiKey=" + key + "&all=1";

//empty var that becomes filled with odds 
var sportOdds;


var bettingOddsUrl = "https://api.the-odds-api.com/v3/odds/?apiKey=" + key + "&sport=" + sport + "&region=" + region + "&mkt=h2h";



function getStatus() {
    $.ajax({
        url: sportStatus,
        method: "GET"
    }).then(function(response) {
        sportActivity = response;
    });

};

// The array becomes filled with the status of all sports. they are in alphabetical order so indices are static.
getStatus();

// master function for out of season sports (returns N/a when sport is not in season)
function outOfSeason() {
    $("#first-league").addClass('text-center');
    $("#first-league").addClass("col-12")
    $(".main-group-set-one-team-odd-1").text("N/A");
    $(".main-group-set-one-team-odd-2").text("N/A");
    $(".main-group-set-two-team-odd-1").text("N/A");
    $(".main-group-set-two-team-odd-2").text("N/A");
    $(".main-group-set-three-team-odd-1").text("N/A");
    $(".main-group-set-three-team-odd-2").text("N/A");
    $(".main-group-set-four-team-odd-1").text("N/A");
    $(".main-group-set-four-team-odd-2").text("N/A");
    $(".main-group-set-five-team-odd-1").text("N/A");
    $(".main-group-set-five-team-odd-2").text("N/A");
    $(".main-group-set-six-team-odd-1").text("N/A");
    $(".main-group-set-six-team-odd-2").text("N/A");
};

//emptier.... empties the odds columns
function emptier() {
    $("#first-league").addClass('text-center');
    $("#first-league").addClass("col-12")
    $(".main-group-set-one-team-odd-1").empty();
    $(".main-group-set-one-team-odd-2").empty();
    $(".main-group-set-two-team-odd-1").empty();
    $(".main-group-set-two-team-odd-2").empty();
    $(".main-group-set-three-team-odd-1").empty();
    $(".main-group-set-three-team-odd-2").empty();
    $(".main-group-set-four-team-odd-1").empty();
    $(".main-group-set-four-team-odd-2").empty();
    $(".main-group-set-five-team-odd-1").empty();
    $(".main-group-set-five-team-odd-2").empty();
    $(".main-group-set-six-team-odd-1").empty();
    $(".main-group-set-six-team-odd-2").empty();
};


// returns betting odds for baseball
function mlbOdds() {
    // check sport status 
    if (sportActivity.data[3].active === true) {
        console.log("baseball is back")
        sport = "baseball_mlb";
        $.ajax({
            url: "https://api.the-odds-api.com/v3/odds/?apiKey=" + key + "&sport=" + sport + "&region=" + region + "&mkt=h2h",
            method: "GET"
        }).then(function(odds) {
            console.log(odds)
        });

    } else {
        //if sport is not active, returns n/a

        outOfSeason();
    }



};

// returns betting odds for nba
function nbaOdds() {
    if (sportActivity.data[5].active === true) {
        console.log("basketball's in season");
        emptier();
        sport = "basketball_nba";
        $.ajax({
            url: "https://api.the-odds-api.com/v3/odds/?apiKey=" + key + "&sport=" + sport + "&region=" + region + "&mkt=h2h",
            method: "GET"
        }).then(function(odds) {
            console.log(odds)
        });

    } else {
        //if sport is not active, returns n/a
        outOfSeason();

    }
};

// returns betting odds for hockey 
function nhlOdds() {
    if (sportActivity.data[16].active === true) {
        emptier();
        sport = "icehockey_nhl";
        $.ajax({
            url: "https://api.the-odds-api.com/v3/odds/?apiKey=" + key + "&sport=" + sport + "&region=" + region + "&mkt=h2h",
            method: "GET"
        }).then(function(odds) {
            console.log(odds)
        });

    } else {
        //if sport is not active, returns n/a
        outOfSeason();

    }
};

function footballOdds() {
    if (sportActivity.data[35].active === true) {
        emptier();
        sport = "soccer_epl";
        $.ajax({
            url: "https://api.the-odds-api.com/v3/odds/?apiKey=" + key + "&sport=" + sport + "&region=" + region + "&mkt=h2h",
            method: "GET"
        }).then(function(odds) {
            console.log(odds);
            $(".main-group-set-one-team-odd-1").empty();
            $(".main-group-set-one-team-odd-2").empty();
            $(".main-group-set-two-team-odd-1").empty();
            $(".main-group-set-two-team-odd-2").empty();
            $(".main-group-set-three-team-odd-1").empty();
            $(".main-group-set-three-team-odd-2").empty();
            $(".main-group-set-four-team-odd-1").empty();
            $(".main-group-set-four-team-odd-2").empty();
            $(".main-group-set-five-team-odd-1").empty();
            $(".main-group-set-five-team-odd-2").empty();
            $(".main-group-set-six-team-odd-1").empty();
            $(".main-group-set-six-team-odd-2").empty();
        });
    } else {
        //if sport is not active, returns n/a
        outOfSeason();

    }
};

$("#baseball").click(function(event) {
    event.preventDefault();
    mlb();

    //adds baseball image to jumbotron
    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://images-na.ssl-images-amazon.com/images/I/61OZXrOI0rL._AC_SX355_.jpg'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");

    })
});

$("#basketball").click(function(event) {
    event.preventDefault();
    nba();
    //adds basketball image to jumbotron

    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://ak9.picdn.net/shutterstock/videos/23220619/thumb/1.jpg'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");

    })
});

$("#football").click(function(event) {
    event.preventDefault();

    //adds football (soccer to everyone but Simon :p) image to jumbotron

    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/styles/image_landscape/public/170816_minnesota_1.jpg?itok=aXTO0hLH'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");

    })
});

$("#hockey").click(function(event) {
    event.preventDefault();
    nhlOdds();

    //adds hockey image to jumbotron

    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://lh3.googleusercontent.com/proxy/zyZCFtk1gEx0uN8ARLm7oovgKW_YyM2JSFCvxlXJjlS7ls2onmViffEYSnH61czRStcEb6WUW5ldA_Iu_MbAdxP6nPSkEtOtdqX-uHaywM1MJWpT420HZ4nAGArECQ'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");
    })
});

$("#football").click(function(event) {
    event.preventDefault();
    footballOdds();
    //adds soccer image to jumbotron
    console.log("football click click");
    console.log(bettingOddsUrl);
    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://www.ncaa.com/sites/default/files/public/images/2019-07-22/Best-college-soccer-stadiums.png'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");
    })
});


function footballOddsGen() {
    console.log(bettingOddsUrl);
}

// gets odds for various matches
function getOdds() {
    $.ajax({
        url: bettingOddsUrl,
        method: "GET"
    }).then(function(response) {
        sportOdds = response;
        console.log(response);
    })
};