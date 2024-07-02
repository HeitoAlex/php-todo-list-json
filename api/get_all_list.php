<?php 

header('Content_Type: application/json');

$toDoList = file_get_contents('../db/todo_list.json');

echo $toDoList;

?>