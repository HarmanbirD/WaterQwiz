<?php

$serverName = "tcp:waterqwiz.database.windows.net, 1433";
$userName = "waterqwiz";
$password = "BCIT_Jacob";
$dbName = "WaterQwiz";

$connectionOptions = array("Database" => "WaterQwiz",
                          "UID" => "waterqwiz@waterqwiz",
                          "PWD" => "BCIT_Jacob");

$conn = sqlsrv_connect($serverName, $connectionOptions);

if($conn === false)
{
    die(print_r(sqlsrv_errors(), true));
}

$tempArray = array();

if ($result = sqlsrv_query($conn, "SELECT name, score FROM leaderboard ORDER BY score DESC")) {

	while($row = $result->fetch_array(MYSQL_ASSOC)) {
		$myArray[] = $row;
	}
	echo json_encode($myArray);
}

$result->close();

?>
