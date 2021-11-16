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
    this.setState({ erroMensagem: '', isLoading: true });
    axios.post('http//localhost:5000/api/login', {
      email: this.state.email,
      senha: this.state.senha
    })

      .then(resposta => {
        if (resposta.status == 200) {
          localStorage.setItem('usuario-login', resposta.data.token);
          this.setState({ isLoading: false });
          console.log("Login realizado")
          this.props.history.push('/');
        }
      })
      .catch(() => {
        this.setState({ erroMensagem: 'E-mail e/ou senha inválidos!', isLoading: false })
      })
  }

  atualizaStateCampo = (campo) => {
    this.setState({ [campo.target.name]: campo.target.value })
    console.log(`${this.state.email} + ${this.state.senha}`)
  };

  render() {
    return (
      <div>
        <main className="flex">

          <div className="banner-login" src="../assets/banner-login.png" alt="Banner"></div>

          <div className="caixa-login">
            <img src={logo} alt="Logo SP Medical Group" />

            <form onSubmit={this.efetuaLogin}>
              <div className="form-login">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.atualizaStateCampo}
                />

                <input type="text" placeholder="Senha" name="senha" value={this.state.senha} onChange={this.atualizaStateCampo} />
                <a href="http://localhost:3000/">Esqueceu a senha?</a>
                {
                  this.state.isLoading === true &&
                  <button type="submit" disabled>Loading...</button>
                }
                {
                  this.state.isLoading === false &&
                  <button type="submit">Login</button>
                }
                <p style={{ color: 'red' }} >{this.state.erroMensagem}</p>
              </div>
            </form>
          </div>
        </main>
      </div >
    );
  }
}