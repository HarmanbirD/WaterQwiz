$(document).ready(function() { 
var audio = document.getElementById('bgmusic');
            document.getElementById('toggle').addEventListener('click', function (e)
            {
                e = e || window.event;
                audio.muted = !audio.muted;
                e.preventDefault();
            }, false);
});