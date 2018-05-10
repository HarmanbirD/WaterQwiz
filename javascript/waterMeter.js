$(document).ready(function() {
    window.addEventListener("resize", handleResize);
    function handleResize() {
    var w = window.innerWidth-2; // -2 accounts for the border
    var h = window.innerHeight-2;
    stage.canvas.width = w;
    stage.canvas.height = h;
    var ratio = 100/100; // 100 is the width and height of the circle content.
    var windowRatio = w/h;
    var scale = w/100;
    if (windowRatio > ratio) {
        scale = h/100;
    }
    // Scale up to fit width or height
    c.scaleX= c.scaleY = scale; 
    
    // Center the shape
    c.x = w / 2;
    c.y = h / 2;
        
    stage.update();
}
       
handleResize(); // First draw
});