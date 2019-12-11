import React from 'react'
import { Link } from 'react-router-dom'
// CSS
import './style.css'


const Buscar = () => {
  
    
    return (

        <div className="buscador">
            <select type="text">
                <option value="0">Selecione uma especialidade</option>
                <option value="1">Psicologia</option>
                <option value="2">Nutricao</option>
                <option value="3">Fisioterapia</option>
                <option value="4">Ortopedia</option>
            </select>
            <Link to="/agendamento"><button className="btn-secondary buscador-button">Buscar</button></Link>
        </div>


    )



}



export default Buscar;
