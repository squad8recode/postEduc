<?php
  require_once('conexao.php');

  $select = "select * from evento where verificado = false ;";

  $resposta = mysqli_query($conexao,$select);

  print_r(json_encode($resposta -> fetch_all(MYSQLI_ASSOC)));

  myslqi_close($conexao)

?>