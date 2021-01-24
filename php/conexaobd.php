<?php

header("Access-Control-Allow-Origin: *");

$servidor = '52.67.245.155';
$usuario = 'squad8';
$senha = 'Squad8123!';
$bancodados = 'posteduc';

$conexao = mysqli_connect($servidor, $usuario, $senha, $bancodados);

if(!$conexao){
    die("<b><br />Erro de conexão com banco de dados!<br /></b>".mysqli_connect_error());
}

?>