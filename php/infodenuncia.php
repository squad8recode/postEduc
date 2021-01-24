<?php
  require_once('./conexao.php');

  $select = 'select * from mostrar_denuncias';

  $resultado = mysqli_query($conexao,$select);

  if($resultado){
    print_r(json_encode($resultado -> fetch_all(MYSQLI_ASSOC)));
  }

  mysqli_close($conexao);
?>