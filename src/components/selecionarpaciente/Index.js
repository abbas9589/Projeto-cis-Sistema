import React from 'react'

// IMAGEM SVG
import FotoAdd from './foto-add.jpeg'

// CSS
import './style.css'

const Selecionar = () => (
    <div className="selecionarPaciente">
        <div className="pacienteSelecionado">
            <img src={FotoAdd}></img>
            <h2>Thiago<br />
                <span> CPF: <strong>777.777.777-77</strong></span>
            </h2>
            <a href="/agendamento/confirmar">Selecionar</a>
        </div>
        <div className="addPaciente">
            <h2><a href="#">Adicionar paciente</a></h2>
        </div>
    </div>
)

export default Selecionar
