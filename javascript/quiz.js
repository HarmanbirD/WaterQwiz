var score = 0;
var mainStage = "#popop";
$(document).ready(function() {   
    var questionNumber = 0;
    var questionBank = new Array();
    var stage = "#questions";
    var questionLock = false;
    var numberOfQuestions;
    
    $.ajax({
        dataType: "json",
        url: "../php/getQuestions.php"
    })
        .done(function(data) {
        for (i = 0; i < data.length; i++) {
            questionBank[i] = new Array();
            questionBank[i][0] = data[i].question;
            questionBank[i][1] = data[i].answer;
            questionBank[i][2] = data[i].option1;
            questionBank[i][3] = data[i].option2;
            questionBank[i][4] = data[i].option3;
            questionBank[i][5] = data[i].drippyhint;
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
                        changeQuestion();
                    }
                    if(this.id!=rnd){
                        document.getElementById("howTo").setAttribute('disabled',false);
                        $("#bg").css('filter', 'blur(1px)');
                        $("body").css('box-shadow', 'inset 0px 0px 400px 110px rgba(0, 0, 0, .7)');
                        $(".option").css('filter', 'brightness(80%)');
                        $("#btn-"+this.id+"").css('background-color', 'red');
                        $(mainStage).append('<div class = "modal-dialog" id="popup"><div class="modal-content">      <div class="modal-header"><h4 class="modal-title">Wrong!</h4></div><div class="modal-body">'+questionBank[questionNumber][5]+'</div><div class="modal-footer"><button type="button" id="next-question" class="btn btn-default btn-lg">Next question</button></div></div></div>');
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
            document.getElementById('questions').innerHTML = "<div id='popop'>Game Over!</div><div id = 'score'>Your score is "  + score + " out of " + numberOfQuestions + "<div class='form-group'><label for='usr'>Name:</label><input type='text' id = 'sendNames' class='form-control' placeholder = 'e.g. Jacob Smith' id='endgamename'></div><button type='button' onclick = 'sendName()' class='btn btn-info' value='Submit Button'>Submit</button>";
        }


    })
                
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

function sendName() {
    var name = document.getElementById("sendNames").value;
    $.ajax({
        type: "POST",
         url: "../php/addScore.php",
        data: {name : name, score : score}
    })
    .done(function(data) {
        $(mainStage).append('<div class = "modal-dialog" id="leaderboard-modal"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Leaderboard</h4></div><div class="modal-body">There was an error loading the leaderboard. Sorry.</div><div class="modal-footer"><div class = "modal-footer-spacing"><div class = "col-xs-6"><img id = "modal-drippy" src = "../images/points-drippy.png"></div><div class = "col-xs-6"><button type="button" class="btn btn-danger" onclick = "location.href = \'../index.html\'" data-dismiss="modal">Close</button></div></div>');
        document.getElementById("howTo").setAttribute('disabled',false);
        $("body").css('box-shadow', 'inset 0px 0px 400px 110px rgba(0, 0, 0, .7)');
        $(".option").css('filter', 'brightness(80%)');
    })}

