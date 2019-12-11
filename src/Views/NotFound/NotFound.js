import React from 'react'
import './style.css'

// image
import MrRobot from './not-found.svg'

const NotFound = () => (
  <div className="container">
    <img src={MrRobot} alt="MrRobot" ></img>
    <div class="error">
      <h1>Erro 404</h1>
      <h2>Ohh no!!!</h2>
      <span>Parece que a página que você estava 
      procurando não foi encontrada.</span>
      <button className="btn-secondary">Voltar a Página Anterior</button>
    </div>
  </div>
);

export default NotFound
