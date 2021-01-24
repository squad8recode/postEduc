<?php
  require_once('./conexao.php');

  $id = $_POST['id_evento'];

  $deletar = "delete from evento where id_evento = '$id';";

  $resposta = mysqli_query($conexao,$deletar);

  if(!$resposta){
    echo 'não foi possivel deletar o evento.';
  } else{
    echo 'evento deletado';
  }

  mysqli_close($conexao);
?>