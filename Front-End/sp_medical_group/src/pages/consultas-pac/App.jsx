import { React, Component } from 'react';
import axios from "axios";
import { parseJwt, usuarioAutenticado } from '../../services/auth/auth.js';

import logo from '../../assets/Imagem_logo.png';
import seta1 from '../../assets/Imagem_seta_1.png';
import seta2 from '../../assets/Imagem_seta_2.png';

export default class Consultas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listaConsultas: [],
            navAtual: 0,
            navLength: 0,
        }
    }

    redirecionarPara = (path) => {
        this.props.history.push(path.target.name)
    }

    efetuarLogout = () => {
        localStorage.removeItem('usuario-login')
        this.props.history.push('/login')
    }

    // Desenvolvimento...
    mudarNavPage = async (event) => {
        await this.setState({
            navAtual: parseInt(event.target.value)
        })
        // console.log(this.state.navAtual)
    }

    // Desenvolvimento...
    calcularNavPage() {
        this.setState({
            // navLength: Math.ceil((this.state.listaConsultas.length / 6))
            navLength: 5
        })
        // console.log(this.state.navLength)
    }

    async listarConsultasPaciente() {
        await axios('http://localhost:5000/api/Consultas/pac/' + parseJwt().email, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
            },
        })
            .then(resposta => {
                if (resposta.status == 200) {
                    this.setState({ listaConsultas: resposta.data })
                };
                //console.log(this.state.listaConsultas)
            })

            .catch(erro => console.log(erro))

        this.calcularNavPage()

    }

    componentDidMount() {
        this.listarConsultasPaciente();
    }

    render() {
        return (
            <body>
                <header class="container">
                    <img src={logo} alt="Imagem_logo" />
                </header>
                <main>
                    <div class="titulo centralizar">
                        <p>Consultas</p>
                        <hr class="linha" />
                    </div>
                    <section class="container centralizar_2">
                        <section class="bloco_1">
                            <div class="alinhar">
                                <div class="circulo"></div>
                                <div>
                                    <h2>Dr. Saulo Santos</h2>
                                    <p>Saulo Lucas Aragão Santos</p>
                                </div>
                                <div>
                                    <h2>17:00</h2>
                                    <p>17/10/2021</p>
                                </div>
                            </div>

                            <div class="alinhar">
                                <div class="circulo"></div>
                                <div>
                                    <h2>Dr. Saulo Santos</h2>
                                    <p>Saulo Lucas Aragão Santos</p>
                                </div>
                                <div>
                                    <h2>17:00</h2>
                                    <p>17/10/2021</p>
                                </div>
                            </div>

                            <div class="alinhar">
                                <div class="circulo"></div>
                                <div>
                                    <h2>Dr. Saulo Santos</h2>
                                    <p>Saulo Lucas Aragão Santos</p>
                                </div>
                                <div>
                                    <h2>17:00</h2>
                                    <p>17/10/2021</p>
                                </div>
                            </div>

                            <div class="alinhar">
                                <div class="circulo"></div>
                                <div>
                                    <h2>Dr. Saulo Santos</h2>
                                    <p>Saulo Lucas Aragão Santos</p>
                                </div>
                                <div>
                                    <h2>17:00</h2>
                                    <p>17/10/2021</p>
                                </div>
                            </div>

                            <div class="alinhar">
                                <div class="circulo"></div>
                                <div>
                                    <h2>Dr. Saulo Santos</h2>
                                    <p>Saulo Lucas Aragão Santos</p>
                                </div>
                                <div>
                                    <h2>17:00</h2>
                                    <p>17/10/2021</p>
                                </div>
                            </div>

                            <div class="alinhar">
                                <div class="circulo"></div>
                                <div>
                                    <h2>Dr. Saulo Santos</h2>
                                    <p>Saulo Lucas Aragão Santos</p>
                                </div>
                                <div>
                                    <h2>17:00</h2>
                                    <p>17/10/2021</p>
                                </div>
                            </div>

                            <section class="alinhar_2">
                                <img src={seta1} alt="Imagem_seta_1" />
                                <div class="quadrado">
                                    <p>1</p>
                                </div>
                                <div class="quadrado">
                                    <p>2</p>
                                </div>
                                <div class="quadrado">
                                    <p>3</p>
                                </div>
                                <div class="quadrado">
                                    <p>4</p>
                                </div>
                                <div class="quadrado">
                                    <p>5</p>
                                </div>
                                <img src={seta2} alt="Imagem_seta_2" />
                            </section>
                        </section>
                    </section>
                </main>
                <footer>
                    <p>SP MEDICAL GROUP</p>
                </footer>
            </body>
        );
    }
}