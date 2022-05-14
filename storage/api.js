function href (location) {
    window.location = location;
}

function download () {
    href ('storage/LucyMiner.zip')
    setTimeout(function(){
        href ('thank-you.html')
    }, 1000);
}