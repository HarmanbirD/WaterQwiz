<?php

$link = mysqli_connect("localhost", "root", "", "waterqwiz");

if(!$link)
{
    die(print_r(mysqli_connect_error(), true));
}

$tempArray = array();
$result = mysqli_query($link, "SELECT * FROM questions;");

if($result === false) {
    die( print_r( mysqli_connect_error(), true) );
}

while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
	$tempArray[] = $row;
}

echo json_encode($tempArray);

mysqli_free_result($result);

?>
