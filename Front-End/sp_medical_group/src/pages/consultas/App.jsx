import logo from '../../assets/Imagem_logo.png';
import seta1 from '../../assets/Imagem_seta_1.png';
import seta2 from '../../assets/Imagem_seta_2.png';

import './App.css';

function App() {
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
                    <section class="bloco_2">
                        <div class="titulo centralizar">
                            <p>Cadastro</p>
                            <hr class="linha" />
                        </div>
                        <div class="alinhar_botoes">
                            <input type="text" placeholder="Médico" />
                            <input type="text" placeholder="Paciente" />
                            <input type="text" placeholder="Situação" />
                            <input type="text" placeholder="Valor" />
                            <input type="date" placeholder="Data" />
                            <button>Cadastrar</button>
                        </div>

                    </section>
                </section>
            </main>
            <footer>
                <p>SP MEDICAL GROUP</p>
            </footer>
        </body>
    );
}

export default App;