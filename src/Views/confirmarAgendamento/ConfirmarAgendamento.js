import React from 'react';
import { Link } from 'react-router-dom'
// Component
import Confirm from '../../components/confirm/confirm'

// css geral
import './style.css';

// images
import agenda from './agenda.svg';

const ConfirmarAgendamento = () => {
  return (
    <div>
      <div className="titulo-pagina">
        <h1 className="container">Área do Paciente</h1>
      </div>
      <div className="container confirmar">
        <section className="finalizar">
          <img src={agenda} alt="agenda"></img>
          <h2>Tudo certo para o seu agendamento?</h2>
          <div className="line"></div>
          <p>Ao clicar em finalizar agendamento, você está
            ciente do <strong>preparo</strong>
          </p>
          <Link to='/sucesso'><button className="btn-primary center">Finalizar Agendamento</button></ Link>
          <Confirm />
          <p>Ao clicar em finalizar agendamento, você está
            ciente do <strong>preparo</strong></p>
          <div className="center">
            <Link to='/agendamento/paciente'><button className="btn-secondary">Alterar</button></Link>
            <Link to='/sucesso'><button className="btn-primary ">Finalizar Agendamento</button></ Link>
          </div>
        </section>
      </div>
    </div>);
}

export default ConfirmarAgendamento;
