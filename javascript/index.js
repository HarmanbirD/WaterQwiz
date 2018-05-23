function diffImage(img) 
{
    if(img.src.match("muted")) img.src = "images/volume.png";
    else img.src = "images/muted.png";
}
$(document).ready(function() { 
var audio = document.getElementById('bgmusic');
            document.getElementById('toggle').addEventListener('click', function (e)
            {
                e = e || window.event;
                audio.muted = !audio.muted;
                e.preventDefault();
            }, false);
});