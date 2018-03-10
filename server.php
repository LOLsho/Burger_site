<?php 
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$street = $_POST['street'];
	$house = $_POST['house'];
	$corp = $_POST['corp'];
	$flat = $_POST['flat'];
	$floor = $_POST['floor'];
	$comments = $_POST['comments'];
	$pay = $_POST['pay'];

	$coll = $_POST['coll'];
	$coll = isset($coll) ? "Не перезванивать" : "Перезвонить";

	$mail_massage = '
	<html>
    <head>
        <title>Заказ</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Адрес: ул. ' . $street . ', д. ' . $house . ', корп. ' . $corp . '' . $flat . ', эт.' . $floor . '</li>
            <li>Комментарий к заказу: ' . $comments . '</li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Нужно ли перезванивать: ' . $coll . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: " . $name . "\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('banano-palma@inbox.ru', 'Заказ', $mail_message, $headers);

    // $data = [];

    if ($mail) {
        echo 'done';
    }else{
        echo 'failed';
    }

    // echo json_encode($data);
    echo $mail_massage;
?>