$(document).ready(function(){
    
    function resize(){
        var fontSize = parseInt($("#score").height())+"px";
        var fontSize = parseInt($("#score").height()*0.9)+"px";
        
        $("#totalScore").css('height', fontSize);
        $("#totalScore").animate({'font-size' : fontSize}, "fast");
    
    }
    window.addEventListener("orientationchange", function() {
    }, false);
    
    
    $(window).on('load resize', resize);
    $(window).on('orientationchange', resize);
});