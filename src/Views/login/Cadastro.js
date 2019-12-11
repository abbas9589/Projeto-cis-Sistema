import React from 'react'
import Beneficios from '../../components/beneficios/Beneficios'

// CSS
import './style.css'

const Cadastro = () => (
    <div className="container">
    <span>ACESSE OU CRIE SUA CONTA</span>
    <div className="login-grid">

        <div className="dados-login">
           <input type="text" placeholder="Use seu email" />
           <span>Nova senha</span>
           <input type="password"  />
           <span>Confirmar senha</span>
           <input type="password" />
           <button className="btn-login">Entrar</button>
           <span>Ja tem conta? <a href="/login">Clique aqui</a></span> 
        </div>
        <div className='bg-login'>
            <h2>Acompanhe todas as suas consultas</h2>
            <span>Faça seu cadastro ao lado, encontre sempre os melhores
                 horários e tenha controle total sobre suas consultas.
                 </span>
        </div>
    </div>

    <Beneficios />



</div>




)
export default Cadastro
