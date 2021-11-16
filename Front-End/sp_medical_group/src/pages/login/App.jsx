import { Component } from "react";
import axios from "axios";

import login from '../../assets/Imagem_login.png';
import logo from '../../assets/Imagem_logo.png';
import chave from '../../assets/Imagem_chave.png';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'yurichiba1@gmail.com',
      senha: '444',
      erroMensagem: '',
      isLoading: false
    }
}

efetuaLogin = (event) => {
  event.preventDefault();
  this.setState({ erroMensagem: '', isLoading: true});
  axios.post('http//localhost:5000/api/login', {
    email: this.state.email,
    senha: this.state.senha
  })

  .then(resposta => {
    if (resposta.status == 200){
      localStorage.setItem('usuario-login', resposta.data.token);
      this.setState({isLoading: false});
      console.log("Login realizado")
      this.props.history.push('/');
    }
  })
  .catch(() =>{
    this.setState({ erroMensagem: 'E-mail e/ou senha inválidos!', isLoading: false })
  })
}

atualizaStateCampo = (campo) => {
  this.setState({ [campo.target.name]: campo.target.value })
  console.log(`${this.state.email} + ${this.state.senha}`)
};

render() {
  return (
    <main>
      <div class="alinhamento">
        <div class="bloco_1">
          <img src={login} alt="Imagem_login" />
        </div>

        <div class="bloco_2">
          <div class="distanciamento">
            <img src={logo} alt="Imagem_logo" />
            <input type="text" />
            <input type="text" />
            <div class="senha">
              <p>Esqueceu sua senha? </p>
              <img src={chave} alt="Imagem_chave" />
            </div>
          </div>

          <button>Login</button>
        </div>
      </div>
    </main>
  );
}

export default App;
