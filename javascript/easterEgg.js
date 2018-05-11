$(document).ready(function() {
    document.getElementById ("banner").addEventListener ("click", updateCounter, false);
        var count = 0;
        function updateCounter() {
            count++;  
            if (count == 9) {
                document.getElementById("bannerIndex").innerHTML = "<a href='jacobsmith.xyz' target='whatever'><img id='banner' src='./images/banner-lg-new2.0.png' alt='Banner'>";
            }
    }
});


