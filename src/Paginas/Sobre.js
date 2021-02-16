import React from 'react'

import '../css/index.css'

import BgImagem from '../Img/mesa-estudos.jpg'
import BgImagem2 from '../Img/matematica-estudos.jpg'
import Pessoa from '../Img/pessoa1.png'


class Sobre extends React.Component {   

    render(){
        return(
            <>
                <div className="bgImagem" style={{ backgroundImage: `url(${BgImagem})` }}>
                    <h1 className="sobre mt-3 py-3">Sobre o PostEduc</h1>
                    <p className="sobre py-3">Uma plataforma web para alunos,
                        jovens e público em geral
                        encontrarem atividades gratuitas
                        diversas que enriquecem a sua
                        formação.</p>
                </div>
                <div className="container py-5">
                    <h1 className="sobreObjetivo">Objetivo</h1>
                    <p className="sobreObjetivo">
                        Nosso objetivo é incentivar um público vulnerável
                        em termos educacionais, socioeconômicos e territoriais tenham
                        uma maior possibilidade de participação, logo de ampliação do
                        horizonte de possibilidades para seu desenvolvimento pessoal,
                        educacional, profissional e cidadão por meio do conhecimento
                        e engajamento em atividades extraclasse e extracurriculares.
                    </p>
                </div>

                <div className="bgImagem" style={{ backgroundImage: `url(${BgImagem2})` }}>
                    <h1 className="sobreObjetivo py-3">Ajuda mútua</h1>
                    <p className="sobreObjetivo py-3">
                        O PostEduc ainda busca integrar alunos por meio de ajuda mútua,
                        professores e comunidade, não só pela participação em eventos e
                        cursos propostos por terceiros, mas também por meio de monitorias
                        com contéudo do ensino fundamental e médio disponibilizados na
                        plataforma com parceria de instituições de ensino.
                    </p>
                </div>
                
            </>
        )
    }
}

export default Sobre