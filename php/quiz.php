<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "WaterQwiz";

function getLeaderboard(){
	$conn = mysqli_connect('localhost');
	$sql = "SELECT * from Leaderboard ORDER BY score DESC";
	$result = $conn->query($sql);
	$conn->close();
	return json_encode($result);
}

?>