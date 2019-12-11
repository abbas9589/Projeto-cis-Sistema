import React from 'react'
import {Link} from 'react-router-dom'
import './confirm.css'

const Confirm = () => (
  <div className="dados-agendamento">
    <div className="confirm-date">
      <h2>Serviço</h2>
      <p>Psicologia</p>
    </div>
    <div className="confirm-date">
      <h2>Paciente</h2>
      <p>Thiago Alves Oliveira</p>
      <Link to='/agendamento/paciente'><a href="">Trocar</a></Link>
    </div>
    <div className="confirm-date">
      <h2>Profissional</h2>
      <p>Lais Fernandes Borges</p>
    </div>
    <div className="confirm-date">
      <h2>Data e Hora</h2>
      <p className="horario">
      <strong>Terça-feira, 10 de Dezembro às 09h00</strong><br/>
        Não precisa chegar antes, este é o horário
        que você deve estar na recepção.
      </p>
    </div>
    <div className="confirm-date">
      <h2>Centro Médico</h2>
      <p>Avenida Felipe Wandscheer, n. 2435 - Foz do Iguaçu - Paraná.</p>
    </div>
    <div className="confirm-date">
      <h2>Valor</h2>
      <p><strong>R$ 20,00</strong> em dinheiro à vista</p>
    </div>
  </div>
)


export default Confirm
