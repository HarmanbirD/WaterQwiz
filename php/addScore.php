<?php

// Call this with POST['name'] as the name to enter and score is a session variable.

$serverName = "tcp:waterqwiz.database.windows.net, 1433";

$connectionOptions = array("Database" => "WaterQwiz",
                           "UID" => "waterqwiz@waterqwiz",
                           "PWD" => "BCIT_Jacob");

$conn = sqlsrv_connect($serverName, $connectionOptions);

if($conn === false)
{
    die(print_r(sqlsrv_errors(), true));
}

error_log("INSERT INTO leaderboard (name, score) VALUES ("\' . $_POST['name'] . "\', \'" . $_POST['score'] . "\');");

$query = "INSERT INTO leaderboard (name, score) VALUES ("\' . $_POST['name'] . "\', \'" . $_POST['score'] . "\');");
sqlsrv_query($conn, $query);
?>
