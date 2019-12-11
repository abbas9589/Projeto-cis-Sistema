import React from 'react'

// IMAGEM SVG
import Formulario from './acompanhe.svg'
import Coracao from './coracao.svg'
import Perfil from '../../Assets/img/homem-ico.svg'
import KIT from '../../Assets/img/kit-medico.svg'
// CSS
import './style.css'


const Beneficios = () => (

    <section className="container economize">
    <h2>Economize tempo e dinheiro com a sua conta CIS</h2>
    <div>
      <img src={Formulario}></img>
      <h3>Acompanhe suas reservas</h3>
      <span>Confira a situação de suas consultas, receba comprovantes de agendamento e faça agendamentos online.</span>
    </div>
    <div>
      <img src={Coracao}></img>
      <h3>Crie alertas</h3>
      <span>Confira a situação de suas consultas, receba comprovantes de agendamento e faça agendamentos online.</span>
    </div>
    <div>
      <img src={Perfil}></img>
      <h3>Administre o seu perfil</h3>
      <span>Confira a situação de suas consultas, receba comprovantes de agendamento e faça agendamentos online.</span>
    </div>
    <div>
      <img src={KIT}></img>
      <h3>Agilize suas consultas</h3>
      <span>Confira a situação de suas consultas, receba comprovantes de agendamento e faça agendamentos online.</span>
    </div>
  </section>



)
export default Beneficios
