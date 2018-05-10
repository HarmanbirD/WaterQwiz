$(document).ready(function() {
    var questionNumber = 0,
        questionBank = new Array(),
        stage = "#questions",
        mainStage = "#popop",
        questionLock = false,
        numberOfQuestions,
        score = 0,
        running = true;
    var timer;
        
    function startTimer(duration) {
        timer = duration;
        setInterval(function () {
            if(timer >100){
                timer = 100;
            }
            gauge.set(timer);
            document.getElementById('waterMeter-value').innerHTML = timer;
            if (running){
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
        document.getElementById('questions').innerHTML = "<div id='popop'>Game Over!</div><div id = 'score'>Your score is "  + score + "<div class='form-group'><label for='usr'>Name:</label><input type='text' id = 'sendName' class='form-control' placeholder = 'e.g. Jacob Smith' id='endgamename'></div><input type='submit' onclick = 'sendName()' class='btn btn-info' value='Submit Button'>";
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
    startTimer(100);         // set actual value
    var target = document.getElementById('waterMeter'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 16; // set animation speed (32 is default value)
                        
                        
    $.getJSON('questions.json', function (data) {
        var i;
        for (i = 0; i < data.quizlist.length; i++) {
            questionBank[i] = new Array();
            questionBank[i][0] = data.quizlist[i].question;
            questionBank[i][1] = data.quizlist[i].option1;
            questionBank[i][2] = data.quizlist[i].option2;
            questionBank[i][3] = data.quizlist[i].option3;
            questionBank[i][4] = data.quizlist[i].option4;
            questionBank[i][5] = data.quizlist[i].hint;
        }
        numberOfQuestions = questionBank.length;
        scrambleDatabase();
        displayQuestion();
        
        function scrambleDatabase(){
            for(i = 0; i < 50; i++){ 
            var rnd1 = Math.floor(Math.random() * questionBank.length);
            var rnd2 = Math.floor(Math.random() * questionBank.length);

            var temp = questionBank[rnd1];
            questionBank[rnd1] = questionBank[rnd2];
            questionBank[rnd2] = temp;

            }
	 
         }
        
        function displayQuestion(){
            var rnd=Math.random()*4;
            rnd=Math.ceil(rnd);
            var q1;
            var q2;
            var q3;
            var q4;

            if(rnd==1){
                q1=questionBank[questionNumber][1];
                q2=questionBank[questionNumber][2];
                q3=questionBank[questionNumber][3];
                q4=questionBank[questionNumber][4];
            }
            if(rnd==2){
                q2=questionBank[questionNumber][1];
                q3=questionBank[questionNumber][2];
                q1=questionBank[questionNumber][3];
                q4=questionBank[questionNumber][4];
            }
            if(rnd==3){
                q3=questionBank[questionNumber][1];
                q1=questionBank[questionNumber][2];
                q2=questionBank[questionNumber][3];
                q4=questionBank[questionNumber][4];
            }
            if (rnd == 4) {
                q4 = questionBank[questionNumber][1];
                q1=questionBank[questionNumber][4];
                q2=questionBank[questionNumber][2];
                q3=questionBank[questionNumber][3];
            }
            $(stage).append('<div class = "score">Score: '+score+' / ' +questionNumber+ '</div><div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option"><button type="button" id = "btn-1" class="btn btn-default btn-lg">'+q1+'</button></div><div id="2" class="option"><button type="button" id = "btn-2" class="btn btn-default btn-lg">'+q2+'</button></div><div id="3" class="option"><button type="button" id = "btn-3" class="btn btn-default btn-lg">'+q3+'</button></div><div id="4" class="option"><button type="button" id = "btn-4" class="btn btn-default btn-lg">'+q4+'</button></div>');
            $(stage).css("right","-1000px");
            $(stage).animate({opacity: "1"}, {duration: 1000, queue: false});
            $(stage).animate({"right": "+=1000px"},"slow","swing");
            

            
                $('.option').click(function() {
                    if(questionLock==false){
                        questionLock=true;	
                        if(this.id==rnd){
                            $("#btn-"+this.id+"").css('background-color', 'green');
                            score++;
                            timer +=3;
                            changeQuestion();
                        }
                        if(this.id!=rnd){
                            timer-=3;
                            document.getElementById("howTo").setAttribute('disabled',false);
                            $("#bg").css('filter', 'blur(1px)');
                            $("body").css('box-shadow', 'inset 0px 0px 400px 110px rgba(0, 0, 0, .7)');
                            $(".option").css('filter', 'brightness(80%)');
                            $("#btn-"+this.id+"").css('background-color', 'red');
                            $(mainStage).append('<div class = "modal-dialog" id="popup"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Wrong!</h4></div><div class="modal-body">'+questionBank[questionNumber][5]+'</div><div class="modal-footer"><button type="button" id="next-question" class="btn btn-default btn-lg">Next question</button></div></div></div>');
                        }

                }})
            }
            
            $(document).on('click', '#next-question', function(){
                changeQuestion();
                document.getElementById("howTo").removeAttribute("disabled");
                $("body").css('box-shadow', 'inset 0px 0px 400px 110px rgba(0, 0, 0, 0)');
                $(".option").css('filter', 'brightness(100%)');
                $("#bg").css('filter', '');
            })
        
            function changeQuestion() { 
                document.getElementById('popop').innerHTML = "";
                questionNumber++;
                if(questionNumber<numberOfQuestions) {
                    $(stage).animate({opacity: "0"}, {duration: 300, queue: false});
                    $(stage).animate({right: "+=1000px"},"slow","swing",function(){
                        $(stage).empty();
                        displayQuestion();});
                    questionLock=false;
                } else {
                    endGame();
                }
            }
             
            function endGame() {
                document.getElementById('questions').innerHTML = "<div id='popop'>Game Over!</div><div id = 'score'>Your score is "  + score + " out of " + numberOfQuestions + "<div class='form-group'><label for='usr'>Name:</label><input type='text' id = 'sendName' class='form-control' placeholder = 'e.g. Jacob Smith' id='endgamename'></div><input type='submit' onclick = 'sendName()' class='btn btn-info' value='Submit Button'>";
            }

        
            })
    
            function sendName() {
                var name = document.getElementById("sendName").value;
                $.ajax({
                    type: "POST",
                     url: "../php/addScore.php",
                    data: {name : name, score : score}
                });
            }

            function outOfTime(){
                document.getElementById("howTo").setAttribute('disabled',false);
                            $("#bg").css('filter', 'blur(1px)');
                            $("body").css('box-shadow', 'inset 0px 0px 400px 110px rgba(0, 0, 0, .7)');
                            $(".option").css('filter', 'brightness(80%)');
                            $(mainStage).append('<div class = "modal-dialog" id="popup"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Out of Time!</h4></div><div class="modal-body">'+questionBank[questionNumber][5]+'</div><div class="modal-footer"><button type="button" id="next-question" class="btn btn-default btn-lg">Next question</button></div></div></div>');
            }
                            
            window.onbeforeunload = function(evt){
                if (typeof evt == 'undefined') {
                    evt = window.event;
                }
                if (evt) {
                    evt.returnValue = confirm("Are you sure you want to leave?");
                }
              
                return  evt.returnValue;
            };
    
});