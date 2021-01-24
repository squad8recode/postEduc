<?php
  header("Access-Control-Allow-Origin: *");

  $servidor = '52.67.245.155';
  $usuario = 'squad8';
  $senha = 'Squad8123!';
  $bancodados = 'posteduc';
  
  $conexao = mysqli_connect($servidor, $usuario, $senha, $bancodados);

  if (isset($_POST['nome_usuario'],$_POST['senha'])) {

    $nome_usuario = mysqli_real_escape_string($conexao, $_POST['nome_usuario']);
    $senha        = mysqli_real_escape_string($conexao, $_POST['senha']);

    $query = "select * from usuario where nome_usuario = '$nome_usuario' and senha = '$senha';";    

    $result = mysqli_query($conexao, $query);

    $row = mysqli_num_rows($result);   
    
    if($row == 1) {
      print_r(json_encode($result -> fetch_all(MYSQLI_ASSOC)));
    }
  }    
?>