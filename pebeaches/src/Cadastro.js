function Cadastro() {
    return (
        <>
        <div class="container-cadastro">
        <div class="form">
            <form action="#">
                <div class="form-title">
                    <h1>Cadastro</h1>
                </div>

                <div class="form-inputs">
                    <label for="email">Email</label>
                    <input id ="email" type="email" name="email" placeholder="Digite seu email" required></input>
                </div>

                <div class="form-inputs">
                    <label for="password">Senha</label>
                    <input id ="password" type="password" name="password" placeholder="Digite sua senha" required></input>
                </div>

                <div class="form-inputs">
                    <label for="confirmpassword">Confirmar Senha</label>
                    <input id ="confirmpassword" type="password" name="confirmpassword" placeholder="Digite sua senha novamente" required></input>
                </div>

                <div class="form-inputs">
                <label for="selecttopics">Selecione seus interesses:</label>
                </div>

                <div class="topic-inputs">
                    <input type="checkbox" id="ecossistem" name="ecossistem"></input>
                    <label for="ecossistem">Ecossistema Marinho</label>
                </div>

                <div class="topic-inputs">
                    <input type="checkbox" id="turism" name="turism"></input>
                    <label for="turism">Turismo</label>
                </div>

                <div class="topic-inputs">
                    <input type="checkbox" id="projects" name="projects"></input>
                    <label for="projects">Projetos</label>
                </div>

                <div class="continue-button buttons">
                    <button><a href="#">Continuar</a></button>
                </div>

            </form>
        </div>

    </div>
      </>
    );
  }
  
  export default Cadastro;