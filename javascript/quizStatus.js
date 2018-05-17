$(document).ready(function(){
    
    function resize(){
        var containerSize = parseInt($("#scoreImage").height())+"px";
        var fontSize = parseInt($("#scoreImage").height()*0.9)+"px";
        
        $("#totalScore").css('height', containerSize);
        $("#totalScore").animate({'font-size' : fontSize}, "fast");
    
    }
    window.addEventListener("orientationchange", function() {
    }, false);
    
    
    $(window).on('load resize', resize);
    $(window).on('orientationchange', resize);
});