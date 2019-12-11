import React from 'react'
import Beneficios from '../../components/beneficios/Beneficios'
import {Link} from 'react-router-dom'
// CSS
import './style.css'

const Login = () => (


    <div className="container">
        <span>ACESSE OU CRIE SUA CONTA</span>
        <div className="login-grid">

            <div className="dados-login">
               <input type="text" placeholder="Use seu email" />
               <input type="password" placeholder="Sua senha" />
               <strong><a href="#">Esqueceu sua senha?</a></strong>
               <Link to='/perfil'><button className="btn-login largar">Entrar</button></Link>
               <span>Ainda não tem um conta? <a href="/cadastro">Crie uma agora</a></span> 
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

export default Login
