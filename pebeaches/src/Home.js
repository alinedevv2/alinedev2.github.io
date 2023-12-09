import logo from './img/seamenu.png'

function Home() {
    return (
        <>
        <main>
        <div class="homepage-titles">
            <h1>Bem-vindo(a) ao</h1>
            <h2>PE Beaches</h2>
            <br></br>
        </div>
        
        <div class ="homepage-container">

            <div class="homepage-descriptionlist">
                <ul class="description-list">
                    <li>Tenha acesso à informações atualizadas sobre a vida marinha e praias do Estado de Pernambuco.</li>
                    <li>Confira as melhores praias para visitar.</li>
                    <li>Fique por dentro dos projetos de conservação.</li>
                </ul>
            </div>
            
            <div class="homepage-buttons">
                <div class="login-button buttons">
                    <button><a href="#">Login</a></button>
                </div>
                <hr></hr>
                <div class="cadastro-button buttons">
                    <button><a href="cadastro.html">Cadastro</a></button>
                </div>
            </div>

        </div>

        <nav class="navbar">
            <div class="menu-items">
            <ul>
                <li class="menu-item"><a href="#">Início</a></li>
                <li class="menu-item"><a href="#">Sobre</a></li>
                <li class="menu-item"><a href="#">Contato</a></li>
            </ul>
            </div>
            <img src={logo} alt="menu-icon" class="menu-icon"></img>
        </nav>
      </main>
      </>
    );
  }
  export default Home;