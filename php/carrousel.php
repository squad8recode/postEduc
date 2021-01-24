<?php

  require_once('./conexao.php');

  $select = "select * from evento limit 3;";

  $resp = mysqli_query($conexao,$select);

  print_r(json_encode($resp -> fetch_all(MYSQLI_ASSOC)));

  mysqli_close($conexao);

?>