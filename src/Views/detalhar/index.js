import React from 'react';
import {Link} from 'react-router-dom'

// Component
import Confirm from '../../components/confirm/confirm'

const Detalhes = () => {
  return (
    <div>
      
      <div className="titulo-pagina">
        <h1 className="container">Sucesso</h1>
      </div>
      
      <div className="container confirmar">
      <h5>
        <Link to="/">Home</Link>  >  <Link to="/agendamento">agendamento</Link>  >  detalhes
      </h5>
        <section className="finalizar">
        
        <Confirm />

        </section>
      </div>
    </div>);
}

export default Detalhes;
