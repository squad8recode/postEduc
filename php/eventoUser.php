<?php
  require_once('./conexao.php');

  $id = $_GET['id'];

  $sel = "select * from evento where criador_evento = $id";

  $res = mysqli_query($conexao,$sel);

  print_r(json_encode($res -> fetch_all(MYSQLI_ASSOC)));

  mysqli_close($conexao);

?>