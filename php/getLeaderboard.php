<?php

$serverName = "localhost";
$userName = "root";
$password = "";
$dbName = "WaterQwiz";

$mysqli = new mysqli($serverName, $userName, $password, $dbName);

$tempArray = array();
if ($result = $mysqli->query("SELECT name, score FROM Leaderboard ORDER BY score DESC")) {

	while($row = $result->fetch_array(MYSQL_ASSOC)) {
		$myArray[] = $row;
	}
	echo json_encode($myArray);
}

$result->close();
$mysqli->close();

?>
