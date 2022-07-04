<?php

include("connect.php");
include("axios.php");

// if (!isset($_GET['contents'])) {
// }
$sql = "SELECT * FROM TB_MY_BOARD";

get($conn, $sql);

echo json_encode($data);

mysqli_close($conn);
