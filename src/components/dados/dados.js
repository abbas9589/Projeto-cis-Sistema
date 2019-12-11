import React from 'react'
import './dados.css'

const dados = () =>(
   
     <section className="borda">
       <div className="dadospessoa">
        <h2 className="row">Dados Pessoais <a href="#"> Editar </a></h2>
        <p>Nome: <strong>Maria Alves</strong></p>
        <p>Apelido: <strong>-</strong></p>
        <p className="separar">Data de Nascimento: <strong>13/07/1997</strong></p>
        <p>Sexo: <strong>Feminino</strong></p>
        <p>Estado civil: <strong>Solteira</strong></p>

       </div>

       <div className="dadospessoa">
        <h2 className="row">Endereço<a href="#"> Editar </a></h2>
        <p>Endereço <strong>Rua Balduino Weirich</strong></p>
        <p>Cep: <strong>85858-120</strong></p>
        <p >Bairro: <strong>Vila Boa Esperança</strong></p>
        <p>Cidade: <strong>Foz do Iguaçu</strong></p>
        <p>Estado: <strong>Paraná</strong></p>
       </div>

       <div className="dadospessoa">
        <h2 className="row">Documentos<a href="#"> </a></h2>
        <p>CPF:<strong>111.111.111.11</strong></p>        
       </div>

       <div className="dadospessoa">
        <h2 className="row">Dados de Contato<a href="#"> </a></h2>
        <p>Email:<strong> maria@hotmail.com</strong></p>
        <p>Celular: <strong>(45)9999999</strong></p>
        <p >Tel fixo: <strong>(45)3030303</strong></p>      

       </div>


     </section>


);


export default dados
