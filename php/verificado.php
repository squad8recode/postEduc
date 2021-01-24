<?php
  require_once('conexao.php');

  $id = $_POST['id'];

  $insert = "call verificacao('$id')";

  $resposta = mysqli_query($conexao,$insert);

  myslqi_close($conexao);
?>