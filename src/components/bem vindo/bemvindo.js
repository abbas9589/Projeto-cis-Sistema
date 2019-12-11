import React from 'react'
import './bemvindo.css'
import foto from './perfilfoto.svg'
const bemvindo = () => {
    return (
        <div>
            <div className="bemvindo">
                <p>Bem vindo </p>
                <div className="usuario">

                <img src={foto}></img>
                <span>Maria Alves</span>
                </div>
                <button className="escolher">Perfil</button>

                <button className="escolher">Agendamentos</button>

                <button className="escolher">Históricos</button>

                <button className="escolher">Mensagens</button>


            </div>

        </div>
    )
}

export default bemvindo
