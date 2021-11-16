import login from '../../assets/Imagem_login.png';
import logo from '../../assets/Imagem_logo.png';
import centro from '../../assets/Imagem_centro.png';

import './App.css';

function App() {
    return (
        <body>
        <header class="container">
            <img src={logo} alt="Imagem_logo"/>
            <button>Login</button>
        </header>
        <main>
            <div class="centralizar">
                <img src={centro} alt="Imagem_centro"/>
                <p>A melhor clínica de São Paulo</p>
            </div>
        </main>
        <footer>
            <p>SP MEDICAL GROUP</p>
        </footer>    
    </body>
    );
  }
  
  export default App;