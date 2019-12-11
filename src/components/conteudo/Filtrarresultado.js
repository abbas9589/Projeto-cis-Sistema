import React from 'react';
import '../conteudo/conteudo.css'

// components
function Filtrarresultado() {
  return (
      
        
        <aside className="mainaside">
          <h2>Filtrar Resultado</h2>
          <div className="box">
            <h4>Especialidades</h4>
            <input type="text" placeholder="Oftamologista" />
          </div>
          <div className="box">
            <h4>Data</h4>
            <input type="" placeholder="Oftamologista" />
          </div>
          <div className="box">
            <h4>Horarios</h4>
            <div className="checando">
              <input type="checkbox" id="scales" name="scales" />
              <label htmlFor="Manha"><p>Manha</p>(09:00 / 12:00)</label>
            </div>
            <div className="checando">
              <input type="checkbox" id="scales" name="scales" />
              <label htmlFor="Manha"><p>Tarde</p>(12:00 / 17:00)</label>
            </div>
          </div>
        </aside>
  );
}

export default Filtrarresultado;
