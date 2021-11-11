import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <div class="alinhamento">
        <div class="bloco_1">
          <img src="Imagem_login.png" alt="Imagem_login" />
        </div>

        <div class="bloco_2">
          <div class="distanciamento">
            <img src="Imagem_logo.png" alt="Imagem_logo" />
            <input type="text" />
            <input type="text" />
            <div class="senha">
              <p>Esqueceu sua senha? </p>
              <img src="Imagem_chave.png" alt="Imagem_chave" />
            </div>
          </div>

          <button>Login</button>
        </div>
      </div>
    </main>
  );
}

export default App;
