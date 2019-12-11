import React from 'react'
import './perfil.css'
import Bemvindo from '../../components/bem vindo/bemvindo'
import Dados from '../../components/dados/dados'
const perfil = () => ( 
   
        <div>
            <div className="titulo-pagina">
                <h1 className="container">Area do paciente</h1>
            </div>
            <section className="perfil container">
               <Bemvindo/>                 
               <Dados/>
                    
            </section>
        </div>
    );


export default perfil
