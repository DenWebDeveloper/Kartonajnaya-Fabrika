<?php

    $to = "step-klim@mail.ru";
    $from = trim($_POST['email']);

    $massage = htmlspecialchars($_POST['message']);
    $massage = urldecode($massagemess);
    $massage = trim($massagemess);

    $headers = "From: $from" . "\r\n" . 
    "Replay-To: $from" . "\r\n" . 
    "X-Mailer: PHP/" . phpversion();

    if(mail($to, $massage,$headers)){

        echo "Письмл отправлено";
    }else{
        echo "Письмл не отправлено";
    }






?>