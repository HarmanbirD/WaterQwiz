

$(document).ready(function() {        
        $.ajax({
            dataType: "json",
            url: "/php/getQuestions.php"
        })
        .done(function(data) {
            var questionNumber = 0;
            var questionBank = new Array();
            var stage = "#questions";
            var mainStage = "#popop";
            var questionLock = false;
            var numberOfQuestions;
            var score = 0;
            
            for (i = 0; i < data.length; i++) {
                questionBank[i] = new Array();
                questionBank[i][0] = data[i].question;
                questionBank[i][1] = data[i].answer;
                questionBank[i][2] = data[i].option1;
                questionBank[i][3] = data[i].option2;
                questionBank[i][4] = data[i].option3;
                questionBank[i][4] = data[i].hint;
            }
            
            numberOfQuestions = questionBank.length;
            displayQuestion();
        
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
          
            
                $(stage).append('<div class = "score">Score: '+score+' / ' +questionNumber+ '</div><div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option"><button type="button" class="btn btn-default btn-lg">'+q1+'</button></div><div id="2" class="option"><button type="button" class="btn btn-default btn-lg">'+q2+'</button></div><div id="3" class="option"><button type="button" class="btn btn-default btn-lg">'+q3+'</button></div><div id="4" class="option"><button type="button" class="btn btn-default btn-lg">'+q4+'</button></div>');
                $(stage).css("right","-1000px");
                $(stage).animate({opacity: "1"}, {duration: 1000, queue: false});
                $(stage).animate({"right": "+=1000px"},"slow","swing");

                $('.option').click(function() {
                    $("#bg").css('filter', 'blur(1px)');
                    $("body").css('box-shadow', 'inset 0px 0px 400px 110px rgba(0, 0, 0, .7)');
                    $(".option").css('filter', 'brightness(80%)');
                    if(questionLock==false){
                        questionLock=true;	
                        if(this.id==rnd){
                            $("this.id").css('background-color', 'green');
                            $(mainStage).append('<div class = "modal-dialog" id="popup"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Correct!</h4></div><div class="modal-body">Drippy was here</div><div class="modal-footer"><button type="button" id="next-question" class="btn btn-default btn-lg">Next question</button></div></div></div>');
                            score++;
                        }
                        if(this.id!=rnd){
                            $("this.id").css('background-color', 'red');
                            $(mainStage).append('<div class = "modal-dialog" id="popup"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Wrong!</h4></div><div class="modal-body">Drippy was here</div><div class="modal-footer"><button type="button" id="next-question" class="btn btn-default btn-lg">Next question</button></div></div></div>');
                        }

                }})
                }
                $(document).on('click', '#next-question', function(){
                    changeQuestion();
                    $("body").css('box-shadow', 'inset 0px 0px 400px 110px rgba(0, 0, 0, 0)');
                    $(".option").css('filter', 'brightness(100%)');
                    $("#bg").css('filter', 'blur(0)');  
                })
                function changeQuestion() {  
                document.getElementById('popop').innerHTML = "";
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


