<?php
if (isset($_POST['user_name']) && isset($_POST['user_mail']))
{
    $file = fopen('mes.txt','a+');
    fwrite($file, 'Name - ' . $_POST['user_name']);
    fwrite($file, ' Mail - ' . $_POST['user_mail'] . "\n");
    fclose($file);
    echo 'Успешно';
}
else if (isset($_POST['user_name']) && isset($_POST['user_phone']))
{
    $file = fopen('mes.txt','a+');
    fwrite($file, 'Name - ' . $_POST['user_name']);
    fwrite($file, ' Phone - ' . $_POST['user_phone'] . "\n");
    fclose($file);
    echo 'Успешно';
}
?>