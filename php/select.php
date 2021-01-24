<?php

  require_once('./conexao.php');

  $evento = $_get['id_evento']

  $select = "select * from evento where id_evento = $evento";

  $resultado = mysqli_query($conexao,$select);

  if($resultado){
    print_r(json_encode($resultado -> fetch_all(MYSQLI_ASSOC)));
  }

  mysqli_close($conexao)
?>
