import { Component } from 'react';
import { parseJwt, usuarioAutenticado } from '../../services/auth/auth.js';
import { Link } from 'react-router-dom';

import logo from '../../assets/Imagem_logo.png';
import centro from '../../assets/Imagem_centro.png';

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
            <body>
                <header class="container">
                    <img src={logo} alt="Imagem_logo" />
                    <button>Login</button>
                </header>
                <main>
                    <div class="centralizar">
                        <img src={centro} alt="Imagem_centro" />
                        <p>A melhor clínica de São Paulo</p>
                    </div>
                </main>
                <footer>
                    <p>SP MEDICAL GROUP</p>
                </footer>
            </body>
        );
    }
}



