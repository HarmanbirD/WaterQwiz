<?php

    $Dir = "../questions";
    $DirOpen = opendir($Dir);
    $allQuestions = glob("../questions/questions.txt");
    for ($i = 0; $i < count($allQuestions); $i++) {
        $questions = file_get_contents($allContents);
        $info = explode("@", $questions);
        $number = (rand(0, count(info)));

        
?>