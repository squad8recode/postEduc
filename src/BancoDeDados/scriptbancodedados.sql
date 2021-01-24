create database if not exists posteduc;
use posteduc;

create table if not exists usuario(
	id_usuario 	  	  int          not null auto_increment,
	nome              varchar(50)  default null,
  sobrenome         varchar(150) default null,
	nome_usuario      varchar(30)  default null,
	nascimento        date         default null,
	email             varchar(45)  default null,
	senha             varchar(45)  default null,
	cidade            varchar(100) default null,
  bairro            varchar(100) default null,
  uf                varchar(2)   default null,
  escola            varchar(100) default null,
  tipo_escola       varchar(50)  default null,
	ano_letivo        varchar(50)  default null,
	genero            varchar(45)  default null,
	telefone          varchar(45)  default null,
  
	primary key      (id_usuario)
);

create table if not exists evento (
	id_evento 	     int           not null auto_increment,
	modalidade       varchar(30)   default null, 
	nome_evento      varchar(200)  default null, 
	categoria        varchar(100)  default null, 
	data_postagem    date          default null, 
	hora_postagem    time          default null, 
	data_evento      date          default null, 
	hora_evento      time          default null, 
	criador_evento   int           default null, 
	organizadores    varchar(100)  default null, 
	descricao        text          default null, 
	link             varchar(300)  default null, 
	estado           varchar(100)  default null, 
	cidade           varchar(100)  default null, 
	bairro           varchar(100)  default null, 
	logradouro       varchar(100)  default null, 
	numero           varchar(50)   default null, 
	complemento      varchar(50)   default null, 
	cep              varchar(50)   default null, 
	carga_horaria    varchar(50)   default null, 
	imagem           varchar(1000) default null, 
  verificado       boolean       default false,
  telefone         int           default null, 
	editado          int           default null,
	data_edicao      date          default null,
  hora_edicao      time          default null,
     
  primary key (id_evento),
  foreign key (criador_evento) references usuario (id_usuario) 
);

create table if not exists denuncia (
	id_denuncia        int 		   not null auto_increment,
  id_user_denuncia   int		   not null,
  id_evento_denuncia int		   not null,
  tipo_denuncia      varchar(50) not null,
  data_denuncia      date        not null,
  denuncia		   text		   default null,
    
  primary key (id_denuncia),
  foreign key (id_user_denuncia)   references usuario (id_usuario),
  foreign key (id_evento_denuncia) references evento (id_evento)
);

create table if not exists comentarios(
	id_comentario    int           not null auto_increment,
  id_usuario_fk    int           not null,
  id_evento_fk     int		   not null,
  data_comentario  date          not null,
  tipo_comentario  varchar(100)  not null,
  comentario       varchar(300)  not null,
   
  primary key (id_comentario),
  foreign key (id_usuario_fk) references usuario (id_usuario),
  foreign key (id_evento_fk)  references evento (id_evento)
);

create table if not exists interesse (
	id_interesse int not null auto_increment,
    nome varchar(100) not null,
    email varchar(50) not null,
    interesse text not null,
    primary key (id_interesse)
);
 
create view organizador as
	select nome_evento, id_evento, nome, id_usuario from evento inner join usuario where evento.criador_evento = usuario.id_usuario ;
    
    
-- mostra todas as denuncias junto de quem escreveu e que evento foi denunciado
create view mostrar_denuncias as
	select id_denuncia,tipo_denuncia,data_denuncia,denuncia, nome_evento,id_evento,nome,id_usuario 
    from denuncia inner join evento inner join usuario where id_evento_denuncia = id_evento and id_user_denuncia = id_usuario;
    


-- Libera a tabela evento para deletar
ALTER TABLE denuncia ADD CONSTRAINT delets
  FOREIGN KEY (id_evento_denuncia) REFERENCES evento (id_evento)
    ON DELETE CASCADE ON UPDATE CASCADE;

DELIMITER $$
	create procedure verificacao(in id int)
    begin
		update evento set verificado = true where id_evento = id;
	end $$
DELIMITER ;