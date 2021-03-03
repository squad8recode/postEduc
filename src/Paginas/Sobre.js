import React from 'react'

import '../css/index.css'

import BgImagem from '../Img/mesa-estudos.jpg'

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
                        Nosso objetivo é incentivar e atingir o público vulnerável
                        em termos educacionais, socioeconômicos e territoriais, visando 
                        regiões menos favorecidas nesses âmbitos, e buscando monitorar 
                        resultados para buscar engajar mais atividades nessas mesmas regiões.
                        Dentre os benefícios para nosso usuário, está a ampliação de
                        horizonte e possibilidades para seu desenvolvimento pessoal,
                        educacional, profissional e cidadão por meio do conhecimento
                        e engajamento em atividades extraclasse e extracurriculares.
                    </p>
                </div>
                
            </>
        )
    }
}

export default Sobre