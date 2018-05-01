$(document).ready(function() {
    var questionNumber = 0;
    var questionBank = new Array();
    var stage = "#questions";
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
          
            
            $(stage).append('<div class = "score">Score: '+score+' / ' +questionNumber+ '</div><div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option"><button type="button" class="btn btn-default btn-lg">'+q1+'</button></div><div id="2" class="option"><button type="button" class="btn btn-default btn-lg">'+q2+'</button></div><div id="3" class="option"><button type="button" class="btn btn-default btn-lg">'+q3+'</button></div>');
            $(stage).css("right","-1000px");
             $(stage).animate({opacity: "1"}, {duration: 1000, queue: false});
            $(stage).animate({"right": "+=1000px"},"slow","swing");
            
            $('.option').click(function() {
                if(questionLock==false){
                    questionLock=true;	
                    if(this.id==rnd){
                        $(stage).append('<div class = "modal-fade"><div class  = "modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Correct!</h4></div><div class="modal-body">Drippy was here</div><div class="modal-footer"><button type="button" id="next-question" class="btn">Next question</button></div></div></div></div>');
                        score++;
                    }
                    if(this.id!=rnd){
                        $(stage).append('<div class = "modal-fade"><div class  = "modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Wrong!</h4></div><div class="modal-body">Drippy was here</div><div class="modal-footer"><button type="button" id="next-question" class="btn">Next question</button></div></div></div></div>');
                    }
                    
            }})
            }
            $(document).on('click', '#next-question', function(){
                changeQuestion();
            })
            function changeQuestion() {          
            
            if(++questionNumber<=numberOfQuestions) {
                $(stage).animate({opacity: "0"}, {duration: 300, queue: false});
                $(stage).animate({right: "+=1000px"},"slow","swing",function(){
                    $(stage).empty();
                    displayQuestion();});
                questionLock=false;
            } else {
                displayFinalSlide();
            }
            }
             
            function displayFinalSlide() {
                $(stage).append('<div class = "finalSlide> You got ' + score + '/' + numberOfQuestions + '');
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