$(document).ready(function() {
    document.getElementById ("banner").addEventListener ("click", updateCounter, false);
        var count = 0;
        function updateCounter() {
            if (count == 0) {
                document.getElementById("bannerIndex").innerHTML = "<img id='banner' src='./images/banner-lg-new2.0.png' alt='Banner'>";
            }
            count++;  
            if (count == 9) {
                document.getElementById("bannerIndex").innerHTML = "<a href='https://jacobsmith.xyz/' target='whatever'><img id='banner' src='./images/banner-lg-new2.0.png' alt='Banner'></a>";
                count = 0;
            }
    }
});


