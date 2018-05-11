$(document).ready(function() {
    document.getElementById ("banner").addEventListener ("click", updateCounter, false);
        var count = 0;
        function updateCounter() {
            count++;  
            if (count == 9) {
                document.getElementById("banner").setAttribute('onclick', 'jacobsmith.xyz');
            }
    }
});


