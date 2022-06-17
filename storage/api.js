// LucyMiner api.js

console.log ("What are you doing here? ;)\nHave a great day though and enjoy using LucyMiner!");


window.onload = function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/lucyminer.github.io/visits");
    xhr.responseType = "json";
    xhr.onload = function() {
        console.log("Times Wesbite has been visited: " + this.response.value);
    }
    xhr.send ();
}

// Simple HTML Functions to make it easier

function href (location) {
    window.location = location;
}

function download () {
    href ('storage/LucyMiner.zip')

    setTimeout(function(){
        href ('thank-you.html')
    }, 1000);
}