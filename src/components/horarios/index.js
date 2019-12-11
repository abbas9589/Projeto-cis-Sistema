import React from 'react'
import {Link} from 'react-router-dom'
// Css
import './style.css'
// Imagem PNG
import Ellipse from '../../Assets/img/Ellipse2.png'
const Horarios = () => (
    <section className="disponiveis">
        <div className="horarios">
            <h3>Escolha um horário</h3>
            <div className="boton-grid">
                <Link to='agendamento/paciente'><button className="btn-primary horario">09:00</button></Link>
                <Link to='agendamento/paciente'><button className="btn-primary horario">09:00</button></Link>
                <Link to='agendamento/paciente'><button className="btn-primary horario">09:00</button></Link>
                <Link to='agendamento/paciente'><button className="btn-primary horario">09:00</button></Link>
                <Link to='agendamento/paciente'><button className="btn-primary horario">09:00</button></Link>
                <Link to='agendamento/paciente'><button className="btn-primary horario">09:00</button></Link>
                <Link to='agendamento/paciente'><button className="btn-primary horario">09:00</button></Link>
                <Link to='agendamento/paciente'><button className="btn-primary horario">09:00</button></Link>
                <Link to='agendamento/paciente'><button className="btn-primary horario">09:00</button></Link>
            </div>
        </div>
        <div className="dadosprofissional">
            <div className="imagem-perfil">
                <img src={Ellipse}></img>
            </div>
            <h2>Lais fernandes borges</h2>
            <div className="descricao">
                <span>CRM-SP 106315</span>
                <h3>- breve descrição do perfil</h3>

            </div>
        </div>
    </section>
)

export default Horarios
