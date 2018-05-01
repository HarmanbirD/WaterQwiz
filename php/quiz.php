<?php

$serverName = "localhost";
$userName = "root";
$password = "";
$dbName = "WaterQwiz";

function getLeaderboard(){
	$mysqli = new mysqli($serverName, $userName, $password, $dbName);
	$tempArray = array();
	if ($result = $mysqli->query("SELECT * FROM Leaderboard ORDER BY score DESC")) {

		while($row = $result->fetch_array(MYSQL_ASSOC)) {
			$myArray[] = $row;
		}
		echo json_encode($myArray);
	}

	$result->close();
	$mysqli->close();
}

?>
