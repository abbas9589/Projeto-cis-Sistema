import React from 'react'
// estilos
import './footer.css'
//imagens
import Phone from './Telefone.svg'
import Email from './Email.svg'
import Ajuda from './Ajuda.svg'
import Facebook from './facebook.svg'
import Instagram from './Instagram.svg'

function footer() {

  return (
    <footer>
      <div className="color-help">
        <div className="container grid-help">
          <div className="icon">
            <img src={Phone} alt="Ligue pra gente"></img>
            <h2>(45) 2105-9099</h2>
          </div>
          <div className="icon">
            <img src={Email} alt="Mande-nos um E-mail"></img>
            <h2>Mande um Email
            <p>Respondemos rapidinho</p>
            </h2>

          </div>
          <div className="icon">
            <img src={Ajuda} alt="Peça ajuda"></img>
            <h2>Central de Ajuda
            <p>Encontre todas as respostas</p>
            </h2>

          </div>
        </div>
      </div>

      <div className="container grid-links">
        <section className="links-footer">
          <h5>Institucional</h5>
          <ul>
            <li><a href="#index">Quem somos</a></li>
            <li><a href="#index">Estrutura</a></li>
            <li><a href="#index">Trabalhe conosco</a></li>
            <li><a href="#index">Contato</a></li>
          </ul>
        </section>
        <section className="links-footer">
          <h5>Serviços</h5>
          <ul>
            <li><a href="#index">Consulta social</a></li>
            <li><a href="#index">Consulta popular</a></li>
            <li><a href="#index">Especialidades</a></li>
            <li><a href="#index">Convênios</a></li>
          </ul>
        </section>
        <section className="links-footer">
          <h5>Pacientes</h5>
          <ul>
            <li><a href="#index">Área do paciente</a></li>
            <li><a href="#index">agendamentos</a></li>
            <li><a href="#index">Questionário de Saúde</a></li>
          </ul>
        </section>
        <section className="links-footer">
          <h5>Social</h5>
          <ul className="social-icon">
            <li><a href="#index">
            <img src={Facebook} alt="Siga-nos"></img>Facebook</a></li>
            
            <li><a href="#index">
            <img src={Instagram} alt="Instagram"></img>Instagram</a></li>
          </ul>
        </section>
      </div>
      <div className="color-copy">
        <div className="container grid-copy">
          <p className="copy">
            © 2019 - Centro Integrado de Saúde
            <a href="http://uniamerica.br"> uniamerica </a>
            - Todos os direitos reservados.</p>
          <p className="author">Feito com <span>♥</span> por <strong>AJTN</strong></p>
        </div>
      </div>
    </footer>
  )
}

export default footer;
