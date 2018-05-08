<?php

// Call this with POST['name'] as the name to enter and score is a session variable.

session_start();

$serverName = "tcp:waterqwiz.database.windows.net, 1433";

$connectionOptions = array("Database" => "WaterQwiz",
                          "UID" => "waterqwiz@waterqwiz",
                          "PWD" => "BCIT_Jacob");

$conn = sqlsrv_connect($serverName, $connectionOptions);

if($conn === false)
{
    die(print_r(sqlsrv_errors(), true));
}

if (isset($_POST['name'])) {
	$query = "INSERT INTO leaderboard (name, score) VALUES (" . $_POST['name'] . ", " . $_SESSION['score'] . ");";
	sqlsrv_query($conn, $query);
    }

session_destroy();
?>
