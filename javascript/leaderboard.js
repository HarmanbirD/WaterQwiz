

$(document).ready(function() {
    $('#leaderboard-modal').on('show.bs.modal', function(e) {

        $.ajax({
            dataType: "json",
            url: "../php/getLeaderboard.php",

        })
        .done(getIT(data));
    })
function getIT(obj) {
    var leaders = new Array();
        var count = 0;
        var code = "";


            for (i = 0; i < data.leaders.length; i++) {
                leaders[i] = new Array();
                leaders[i][0] = obj.data.leaders[i].name;
                leaders[i][1] = obj.data.leaders[i].score;
            }

            displayLeaderboards();

            function displayLeaderboards() {
                code += "<div class = 'table-responsive'><table class = 'table'><tr><th>NAME</th><th>SCORE</th></tr>";
                for (i = 0; i < data.leaders.length; i++) {
                    if (count != 0 && count % 10 == 0) {
                        code += "<div class = 'table-responsive'><table class = 'table'>";
                    }
                    code += "<tr><th>";
                    code += leaders[i][0]; 
                    code += "</th><th>"; 
                    code += leaders[i][1]; 
                    code += "</th></tr>";
                    if ((count - 1 + 10) % 10 == 0 || count == leaders.length) {
                        code += "</table></div>";
                    }
                }

        
            }


            document.getElementById("leaders").innerHTML = code;
    }
});


