import React from 'react'

// COMPONENTE
import Buscar from '../../components/busca/Buscar'
import Beneficios from '../../components/beneficios/Beneficios'

// CSS
import './Home.css'

const Home = () => (
  <div>
    <div className="carrosel">
      <section className="container" id="sobre">
        <h1>Como está sua saúde?</h1>
        <span>Agende sua consulta hoje mesmo!</span>
        <Buscar />
        <span>Se preferir agende pelo telefone <strong>(45) 2105-9099</strong></span>
      </section>

    </div>
    <Beneficios />
    <section className="container">
      <h2 className='subtitulo'>Consulta rápida</h2>

      <div className="line orange"></div>
      <section className="opcoes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </section>
    <section className="consultas">
      <div className='popular'>
        <div className="linha"></div>
        <div className="right">

          <h2>Consulta Popular</h2>
          <span>O atendimento na consulta popular é realizado por profissionais altamente qualificados de diferentes especialidades da saúde a um valor acessível.</span>
        </div>

      </div>
      <div className='social'>
        <div className="left">
          <h2>Consulta Social</h2>
          <span>Atendimento feito por estudantes dos últimos períodos dos cursos de saúde e supervisionados por professores altamente qualificados. Nesse modelo, o paciente paga uma taxa simbólica pelo atendimento.</span>
        </div>
      </div>
    </section>
  </div>
)


export default Home
