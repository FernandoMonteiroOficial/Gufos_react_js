import React from 'react';
import Footer from '../../componentes/Footer/Footer';

function Login() {
  return (
    <div className="Login">
        <section class="container flex">
      <div class="img__login"><div class="img__overlay"></div></div>

      <div class="item__login">
        <div class="row">
          <div class="item">
            <img src="./assets/img/icon-login.png" class="icone__login" />
          </div>
          <div class="item" id="item__title">
            <p class="text__login" id="item__description">
              Bem-vindo! Faça login para acessar sua conta.
            </p>
          </div>
          <form>
            <div class="item">
              <input
                class="input__login"
                placeholder="username"
                type="text"
                name="username"
                id="login__email"
              />
            </div>
            <div class="item">
              <input
                class="input__login"
                placeholder="password"
                type="password"
                name="password"
                id="login__password"
              />
            </div>
            <div class="item">
              <button class="btn btn__login" id="btn__login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    {/* <script>
      // console.log(document);
      // id
      // console.log(document.getElementById("login__email"));
      // classe
      // console.log(document.getElementsByClassName("input__login"));

      // var a = 10;
      // var b = "Texto";

      // // buscar a referencia do botao
      // var btnLogin = document.querySelector("#btn__login");

      // btnLogin.addEventListener("click", function(event) {
      //   event.preventDefault();
      //   // console.log("Hello World!");
      //   console.log(document.querySelector("#login__email").value);
      // });

      var inputSenha = document.querySelector("#login__password");

      inputSenha.addEventListener("keyup", function() {
        // caso a senha tenha menos do que 6 caracteres, fica vermelho, querido
        if (inputSenha.value.length < 6) {
          inputSenha.style.borderBottomColor = "red";
        } else {
          inputSenha.style.borderBottomColor = "green";
        }
      });
      </script> */}
    
      <Footer/>
    </div>
  );
}

export default Login;
