// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("circularButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function leaderboardFunction() {
    alert("Leaderboards!");
}

function questions() {
    alert("How To Play");
}

function resize(){
 if ($(window).width() < 1440) {
                   $("#banner img").attr('src', '../images/water-drop%20(1).png');
               } else {
                   $("#banner img").attr('src', '../images/Water_Drop_Icon_Vector.png');
               }
           }
           
           <!-- Binding the function resize to both when it loaded and when user resizes the window -->
           $(window).on('load resize', resize);