import React from 'react'
import './style.css'
const Filtro = () => (
  <aside className="dadosfiltro">
    <h2>Filtrar resultados</h2>
    <div className="res">
      <h4>Especialidades</h4>
      <input type="text" placeholder="Pesquisar...." />
    </div>
    <div className="res">
      <h4>Data</h4>
      <select type="date">
        <option value="0">10 de Dezembro</option>
      </select>
    </div>
    <div className="res">
      <h4>Horários</h4>
      <div className="checker">
        <input type="checkbox" />
        <label htmlFor="Manha"><p>Manha</p>(09:00 / 12:00)</label>
      </div>
      <div className="checker">
        <input type="checkbox" />
        <label htmlFor="Manha"><p>Tarde</p>(12:00 / 17:00)</label>
      </div>

    </div>
    <button className="btn-secondary search">Pesquisar</button>

  </aside>

);
export default Filtro;
