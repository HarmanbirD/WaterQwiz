$(document).ready(function() { 
var audio = document.getElementById('bgmusic');
            document.getElementById('toggle').addEventListener('click', function (e)
            {
                e = e || window.event;
                audio.muted = !audio.muted;
                e.preventDefault();
            }, false);
            
    function diffImage(img) 
    {
       if(img.src.match("muted")) img.src = "volume.png";
       else img.src = "muted.png";
    }
});