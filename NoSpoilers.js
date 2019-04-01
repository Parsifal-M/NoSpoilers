//Find and Hide "Spoilers in Youtube"

//Hide Spoilers

var textSpoiler = document.getElementsById("video-title");
    
if (textSpoiler.includes('ending')){
    textSpoiler.style.visibility = 'hidden';
}




//Hide Recommended videos
var link = document.getElementById('secondary-inner');
link.style.display = 'none'; //or
//link.style.visibility = 'hidden';