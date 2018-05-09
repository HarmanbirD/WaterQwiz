$(document).ready(function() {
    var score = 0,
        running = true;
    
    function startTimer(duration) {
        var timer = duration, seconds    
        setInterval(function () {
        gauge.set(timer);
        document.getElementById('waterMeter-value').innerHTML = timer;
        if (running){
            seconds = parseInt(timer % 60, 10);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            timer--;    
        }
        gauge.set(timer);
        document.getElementById('waterMeter-value').innerHTML = timer;
        if (timer == 0) {
            endGame();
            }
        }, 1000);
    }
    
    function endGame() {    
        running = false;
        document.getElementById('questions').innerHTML = "<div id='popop'>Game Over!</div><div id = 'score'>Your score is "  + score + " out of " + numberOfQuestions + "<div class='form-group'><label for='usr'>Name:</label><input type='text' id = 'sendName' class='form-control' placeholder = 'e.g. Jacob Smith' id='endgamename'></div><input type='submit' onclick = 'sendName()' class='btn btn-info' value='Submit Button'>";
    }
    var opts = {
        angle: -0.30, // The span of the gauge arc
        lineWidth: 0.10, // The line thickness
        radiusScale:0.50, // Relative radius
        pointer: {
            strokeWidth: 0.00, // The thickness
            color: "#EEEEEE"
        },
        staticLabels: {
        font: "10px newFont",
        labels: [0, 25, 50, 75, 100],
        fractionDigits: 0
        },

        // Use this if not use staticZones, need team feedback
        percentColors: [[0.0, "#ff0000" ], [0.30, "#f9c802"], [1.0, "#76d70b"]],
        limitMax: true,     // If false, max value increases automatically if value > maxValue
        limitMin: true,     // If true, the min value of the gauge will be fixed
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
    };
    //start timer
    startTimer(4);         // set actual value
    var target = document.getElementById('waterMeter'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 16; // set animation speed (32 is default value)
    
    
});