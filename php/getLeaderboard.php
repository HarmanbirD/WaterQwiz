<?php

$serverName = "waterqwiz.database.windows.net";
$userName = "waterqwiz";
$password = "BCIT_Jacob";
$dbName = "WaterQwiz";

$conn = mysqli_init();

mysqli_real_connect($conn, $serverName, $userName, $password, $dbName, 3306);

if (mysqli_connect_errno($conn)) {
die('Failed to connect to MySQL: '.mysqli_connect_error());
}

$tempArray = array();

if ($result = mysqli_query($conn, "SELECT name, score FROM leaderboard ORDER BY score DESC")) {

	while($row = $result->fetch_array(MYSQL_ASSOC)) {
		$myArray[] = $row;
	}
	echo json_encode($myArray);
}

$result->close();

?>
