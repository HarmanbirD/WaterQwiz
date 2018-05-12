<?php

$conn = new mysqli_connect("localhost", "root", "", "waterqwiz");

if($conn === false)
{
    die(print_r(mysqli_connect_errno(), true));
}

$tempArray = array();
$result = mysqli_query($conn, "SELECT name, score FROM leaderboard ORDER BY score DESC;");

if($result === false) {
    die( print_r( mysqli_connect_error(), true) );
}

while($row = mysqli_fetch_array($result, MYSQLI_FETCH_ASSOC)) {
	$tempArray[] = $row;
}

echo json_encode($tempArray);

mysqli_free_result($result);

?>
