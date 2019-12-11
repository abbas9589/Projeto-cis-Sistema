import React from 'react';

// Component
import Servicos from '../../components/servicos/Index'
import Selecionar from '../../components/selecionarpaciente/Index'
// css geral
import './style.css'

const SelecionarPaciente = () => {
  return (
    <div>
      <div className="titulo-pagina">
        <h1 className="container">Agendamento</h1>
      </div>

      <div className="grid-app">
        <Servicos />
        <h2>Selecione o paciente</h2>
        <Selecionar />
      </div>
    </div>);
}

export default SelecionarPaciente;
