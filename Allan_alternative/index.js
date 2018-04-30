$(document).ready(function() {
    var questionNumber = 0;
    var questionBank = new Array();
    var stage = "#questions";
    var stage2 = new Object;
    var mainStage = "#menu-container2";
    var questionLock = false;
    var numberOfQuestions;
    var score = 0;
    
    $.getJSON('questions.json', function(data) {
        for (i = 0; i < data.quizlist.length; i++) {
            questionBank[i] = new Array();
            questionBank[i][0] = data.quizlist[i].question;
            questionBank[i][1] = data.quizlist[i].option1;
            questionBank[i][2] = data.quizlist[i].option2;
            questionBank[i][3] = data.quizlist[i].option3;
        }
        numberOfQuestions = questionBank.length;
        displayQuestion();
        
        function displayQuestion(){
            var rnd=Math.random()*3;
            rnd=Math.ceil(rnd);
            var q1;
            var q2;
            var q3;

            if(rnd==1){
                q1=questionBank[questionNumber][1];
                q2=questionBank[questionNumber][2];
                q3=questionBank[questionNumber][3];
            }
            if(rnd==2){
                q2=questionBank[questionNumber][1];
                q3=questionBank[questionNumber][2];
                q1=questionBank[questionNumber][3];
            }
            if(rnd==3){
                q3=questionBank[questionNumber][1];
                q1=questionBank[questionNumber][2];
                q2=questionBank[questionNumber][3];
            }

            $(stage).append('<div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option"><button type="button" class="btn btn-default btn-lg">'+q1+'</button></div><div id="2" class="option"><button type="button" class="btn btn-default btn-lg">'+q2+'</button></div><div id="3" class="option"><button type="button" class="btn btn-default btn-lg">'+q3+'</button></div>');

            $('.option').click(function() {
                if(questionLock==false){
                    questionLock=true;	
                    if(this.id==rnd){
                        $(mainStage).css('background-color', 'rgba(153, 225, 255, 0.9)');
                        $(stage).append('<div class="feedback1">CORRECT</div>');
                        score++;
                    }
                    if(this.id!=rnd){
                        $(stage).append('<div class="feedback2">WRONG</div>');
                    }
                    setTimeout(function() {
                        changeQuestion()
                    } ,1000);
            }})
            }
        
            function changeQuestion() {
                questionNumber++;

                if(stage == "#questions") {
                    stage2 = "#questions";
                    stage = "#questions2";
                } else {
                    stage2 = "#questions2";
                    stage = "#questions";
                }
            if(questionNumber<numberOfQuestions) {
                displayQuestion();
            } else {
                displayFinalSlide();
            }

             $(stage2).animate({"right": "+=800px"},"slow", function() {
                 $(stage2).css('left','-800px');
                 $(stage2).css('display','inline');
                 $(stage2).empty();
             });
             
               
             $(stage).animate({"right": "+=800px"},"slow", function() {
                 questionLock=false;});
            }

            function displayFinalSlide() {
                $(stage).append('<div class = "finalSlide">You got' + $score + '/' + $numberOfQuestions + '');
            }
        
            })
    
});