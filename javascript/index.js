var mainStage = "#popop";
var responseLock = true;

function diffImage(img){
    if(responseLock){return;}
        if(img.src.match("muted")) img.src = "images/volume.png";
        else img.src = "images/muted.png";
}
$(document).ready(function() {
    var audio = document.getElementById('bgmusic');
    welcomeScreen();
    function welcomeScreen(){
        $(':button').prop('disabled', true);
        $(mainStage).append('<div class="modal-dialog" id="popup"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Welcome to WaterQwiz!</h4></div><div class="modal-body">Do you drink water?<br>Get high score to compete with your friends and learn about your best friend Water!</div><div class="modal-footer"><button type="button" id="confirmWelcome" class="btn btn-default btn-lg">Ok</button></div>');
        $('#confirmWelcome').prop('disabled', false);
    }
    
    $(document).on('click', '#confirmWelcome', function(){
        document.getElementById('popop').innerHTML = "";
        $(':button').prop('disabled', false);
        responseLock= false;
        audio.play();
    })
    
    document.getElementById('toggle').addEventListener('click', function (e){
        e = e || window.event;
        audio.muted = !audio.muted;
        e.preventDefault();
    }, false);
           
    
});