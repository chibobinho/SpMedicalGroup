import { Component } from "react";
import { parseJwt, usuarioAutenticado } from '../../services/auth/auth';
import { Link } from 'react-router-dom';

import logo_spmed from "../../assets/Imagem_logo.png"
import logo_spmed1 from "../../assets/logo_spmed.png"

export default class Home extends Component {
    
    redirecionarPara = (path) => {
        this.props.history.push(path.target.name)
    }

    efetuarLogout = () => {
        localStorage.removeItem('usuario-login')
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <header class="container">
<<<<<<< HEAD
                    <img src={logo_spmed} alt="Logo SPMedicalGroup" />
=======
                    <img src={logo} alt="Logo SPMedicalGroup" />
>>>>>>> 5e325ff8ca215cda859232e37595028b7c096fa4
                    <nav>
                        <a name="/" onClick={this.redirecionarPara}>Home</a>
                        {
                            //console.log(parseJwt()),
                            usuarioAutenticado() ?
<<<<<<< HEAD
                            parseJwt().role === 'ADM' ?
                            <a name="/consultas" onClick={this.redirecionarPara} >Consultas</a> :

                            parseJwt().role === 'MED' ?
                            <a name="/consultas-medico" onClick={this.redirecionarPara} >Consultas</a> :
                            
                            parseJwt().role === 'PAC' ?
                            <a name="/consultas-paciente" onClick={this.redirecionarPara} >Consultas</a> :

                            null : null
=======
                                parseJwt().role === 'ADM' ?
                                    <a name="/consultas" onClick={this.redirecionarPara} >Consultas</a> :

                                    parseJwt().role === 'MED' ?
                                        <a name="/consultas-medico" onClick={this.redirecionarPara} >Consultas</a> :

                                        parseJwt().role === 'PAC' ?
                                            <a name="/consultas-paciente" onClick={this.redirecionarPara} >Consultas</a> :

                                            null : null
>>>>>>> 5e325ff8ca215cda859232e37595028b7c096fa4

                        }

                        {
<<<<<<< HEAD
                            usuarioAutenticado() 
                            ? <button id="deslogar" name="/login" onClick={this.efetuarLogout} >Deslogar</button>
                            : <button id="logar" name="/login" onClick={this.redirecionarPara} >Logar</button>
=======
                            usuarioAutenticado()
                                ? <button id="deslogar" name="/login" onClick={this.efetuarLogout} >Desconectar</button>
                                : <button id="logar" name="/login" onClick={this.redirecionarPara} >Conectar</button>
>>>>>>> 5e325ff8ca215cda859232e37595028b7c096fa4

                        }
                    </nav>
                </header>

                <main class="banner-home">
                    <div>
<<<<<<< HEAD
                        <img src={logo_spmed1} alt="Logo SPMedicalGroup" />
                        <span>A melhor clinica de São Paulo</span>
=======
                        <img src={logo} alt="Logo SPMedicalGroup" />
                        <hr />
                        <span>Um nível superior de atendimento.</span>
>>>>>>> 5e325ff8ca215cda859232e37595028b7c096fa4
                    </div>
                </main>

                <footer>
                    <p>Escola Senai De Informática - 2021</p>
                </footer>
            </div >
        )
    }
}