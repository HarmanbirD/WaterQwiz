<?php

$serverName = "tcp:waterqwiz.database.windows.net, 1433";
$connectionOptions = array("Database" => "WaterQwiz",
                          "UID" => "waterqwiz@waterqwiz",
                          "PWD" => "BCIT_Jacob");

$conn = sqlsrv_connect($serverName, $connectionOptions);

if($conn === false)
{
    die(print_r(sqlsrv_errors(), true));
}

$tempArray = array();
$result = sqlsrv_query($conn, "SELECT * FROM questions ORDER BY RAND()") 

if($result === false) {
    die( print_r( sqlsrv_errors(), true) );
}

while($row = fetch_array($result,SQLSRV_FETCH_ASSOC)) {
	$tempArray[] = $row;
}
echo json_encode($myArray);


sqlsrv_free_stmt($result);


?>
