<?php

$conn = new mysqli_connect("localhost", "root", "", "waterqwiz");

if (mysqli_connect_errno()) {
    die("Connection error");
}

$tempArray = array();
$result = mysqli_query($conn, "SELECT * FROM questions;");

if($result === false) {
    die( print_r( mysqli_connect_error(), true) );
}

while($row = mysqli_fetch_array($result, MYSQLI_FETCH_ASSOC)) {
	$tempArray[] = $row;
}

echo json_encode($tempArray);

mysqli_free_result($result);

?>
