<?php
  require_once('./conexao.php');

   if(
     isset($_POST['id_sugestao']) &&
     isset($_POST['nome']) &&
     isset($_POST['email']) &&
     isset($_POST['sugestao'])
    )

    {
      $id_sugestao = $_POST['id_sugestao'];
      $nome        = $_POST['nome'];
      $email       = $_POST['email'];
      $sugestao    = $_POST['sugestao'];

      $sql = "INSERT INTO sugestoes (id_sugestao, nome, email, sugestao) 
              values ('$nome', '$email', '$sugestao');";

      $resposta = mysqli_query($conexao,$sql);

      if($resposta){
        echo 'enviado';
      }else {
        echo 'os dados não foram enviados';
      }
    }else{
      echo 'Não recebi nenhum dado';
    }
  mysqli_close($conexao);

?>