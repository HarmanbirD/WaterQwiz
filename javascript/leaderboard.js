

$(document).ready(function() {
    $('#leaderboard-modal').on('show.bs.modal', function(e) {
        document.getElementById("leaders").innerHTML = "<img src = '../images/watertap.gif'>";
        
        $.ajax({
            dataType: "json",
            url: "../php/getLeaderboard.php"
        })
        .done(function(data) {
            var leaders = new Array();
            var count = 0;
            var code = "";

            for (i = 0; i < data.length; i++) {
                leaders[i] = new Array();
                leaders[i][0] = data[i].name;
                leaders[i][1] = data[i].score;
            }
            
            displayLeaderboards();
            
            function displayLeaderboards() {
                code += "<div class = 'table-responsive'><table class = 'table'><tr><th>NAME</th><th>SCORE</th></tr>";
                for (i = 0; i < data.length; i++) {
                    if (count != 0 && count % 10 == 0) {
                        code += "<div class = 'table-responsive'><table class = 'table'>";
                    }
                    code += "<tr><th>";
                    code += leaders[i][0]; 
                    code += "</th><th>"; 
                    code += leaders[i][1]; 
                    code += "</th></tr>";
                    if ((count % 10 == 0 && count != 0) || count == data.length) {
                        code += "</table></div>";
                    }
                }
            }

            document.getElementById("leaders").innerHTML = code;
        })
    })
});


