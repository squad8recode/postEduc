<?php
    
    require_once("./conexao.php");

    

    // if(
    // //presencial    
    // isset($_POST['criador_evento']) &&
    // isset($_POST['data_postagem']) && 
    // isset($_POST['hora_postagem']) && 
    // isset($_POST['modalidade']) && // online / presencial / semi-presencial
    // isset($_POST['nome_evento']) && 
    // isset($_POST['categoria']) && 
    // isset($_POST['data_evento']) && 
    // isset($_POST['hora_evento']) && 
    // isset($_POST['organizadores']) && 
    // isset($_POST['cep']) && 
    // //isset($_POST['pais']) && 
    // isset($_POST['estado'])&& 
    // isset($_POST['cidade']) && 
    // isset($_POST['bairro']) && 
    // isset($_POST['logradouro']) && 
    // isset($_POST['num']) && 
     
    // isset($_POST['descricao'])&& 
    // isset($_POST['carga_horaria'])
     

    
    
    // or 
    // //online
    // isset($_POST['criador_evento']) && 
    // isset($_POST['data_postagem']) && 
    // isset($_POST['hora_postagem']) && 
    // isset($_POST['modalidade']) && // online / presencial / semi-presencial
    // isset($_POST['nome_evento']) && 
    // isset($_POST['categoria']) && 
    // isset($_POST['data_evento']) && 
    // isset($_POST['hora_evento']) && 
    // isset($_POST['organizadores']) && 
    // isset($_POST['lin']) && 
    // isset($_POST['descricao'])&& 
    // isset($_POST['carga_horaria']) 

    // or
    // //semipresencial
    // isset($_POST['criador_evento']) && 
    // isset($_POST['data_postagem']) && 
    // isset($_POST['hora_postagem']) && 
    // isset($_POST['modalidade']) && 
    // isset($_POST['nome_evento']) && 
    // isset($_POST['categoria']) && 
    // isset($_POST['data_evento']) && 
    // isset($_POST['hora_evento']) && 
    // isset($_POST['organizadores']) && 
    // isset($_POST['lin']) && 
    // isset($_POST['cep']) && 
    // //isset($_POST['pais']) && 
    // isset($_POST['estado'])&& 
    // isset($_POST['cidade']) && 
    // isset($_POST['bairro']) && 
    // isset($_POST['logradouro']) && 
    // isset($_POST['num']) && 
     
    // isset($_POST['descricao'])&& 
    // isset($_POST['carga_horaria']) 
    // )
    // {
        $nome_imagem = $_FILES['imagem']['name'];
        $temp_file = $_FILES['imagem']['tmp_name'];
        $destino = "../img/$nome_imagem";
        move_uploaded_file($temp_file,$destino);

        $criador_evento = $_POST['criador_evento'];;
        $data_postagem  = $_POST['data_postagem'];;
        $hora_postagem  = $_POST['hora_postagem'];;
        $presencial     = $_POST['modalidade'];;
        $nome_evento    = $_POST['nome_evento'];;
        $categoria      = $_POST['categoria'];;
        $data_evento    = $_POST['data_evento'];;
        $hora_evento    = $_POST['hora_evento'];;
        $organizadores  = $_POST['organizadores']; ;
        $link           = $_POST['lin'];;
        $cep            = $_POST['cep'];;
        $estado         = $_POST['estado']; ;
        $cidade         = $_POST['cidade'];;
        $bairro         = $_POST['bairro'];;
        $logradouro     = $_POST['logradouro'];;
        $numero         = $_POST['num'];;
        $complemento    = $_POST['comple'];;
        $descricao      = $_POST['descricao'];;
        $cargahoraria   = $_POST['carga_horaria'];;
        $telefone       = $_POST['telefone'];
        
        $sqlInsert = "INSERT INTO evento(modalidade,nome_evento,categoria,data_postagem,hora_postagem,data_evento,hora_evento,criador_evento,organizadores,descricao,link,estado,cidade,bairro,logradouro,numero,complemento,cep,carga_horaria,imagem,telefone) VALUES ('$presencial','$nome_evento','$categoria','$data_postagem','$hora_postagem','$data_evento','$hora_evento','$criador_evento','$organizadores','$descricao','$link','$estado','$cidade','$bairro','$logradouro','$numero','$complemento','$cep','$cargahoraria','../img/$nome_imagem','$telefone' ); ";

        $res = mysqli_query($conexao,$sqlInsert);


    // } else {
    //     echo "Formulario incompleto<br>
    //     <button><a href='../php/cadastroevento.php'>Voltar</a></button>";
    // }

mysqli_close($conexao)
?>