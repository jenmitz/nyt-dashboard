// page Elements
var searchInputEL = $(`#search`)
var numberInputEL = $(`#number`)
var starYearEL = $(`#start-year`)
var endYearEl = $('#end-year')
var searchEl = $('#submit')
var clearEL = $(`#clear`)
var resultEL = $(`#result`)

//url for API call
var searchTerm = searchInputEL.val()

var APIKey = "&api-key=QS1sj6OrbFwvBFp89VHDEa5XirpGVe6M";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + APIKey;

//funtion for getting info from api
function searchButton() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < numberInputEL.val(); i++) {
        
        console.log(response.response.docs[i])

        var title = response.response.docs[i].headline.main

        var tOne = $(`<p>`).text(title)

        resultEL.append(tOne)
    }

    })
    
}

//submit btn

$('#submit').on('click', function () {
    
    searchButton() 
})

// reset button
$('#clear').on('click', function () {
    console.log("hello")
    window.location.reload()
})



