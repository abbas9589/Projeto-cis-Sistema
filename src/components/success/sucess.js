import React from 'react'
import {Link} from 'react-router-dom'
import './sucess.css'


const Success = () => (
  <div className="container">
    <h2 className="sub">Thiago, seu agendamento foi realizado</h2>

    <div className="bg-sucess">
      <div className="line-y"></div>
      <div className="pgto">
        <span>Pagamento</span>
        <h2>à vista de R$ 20,00</h2>
        <p>Você pode pagar no dia de sua visita em dinheiro.</p>
      </div>
      <div className="servicos">
        <span>Serviço
        <h2>Psicologia</h2>
        </span>

        <p className="destak">Terça-feira, 10/12 às 09h00</p>

        <p className="destak">
          <span>Uniamérica</span><br/>
          Centro Integrado de Saúde
        </p>

        <p className="endereco">
          Avenida Felipe Wandscheer, n. 2435 - 
          Foz do Iguaçu - Paraná.
        </p>
        <a href="como">Como Chegar</a>
        <Link to='/sucesso/detalhes'><button class="btn-secondary detalhes">Detalhes</button></Link>
        
      </div>
    </div> 

  </div>
)

export default Success
