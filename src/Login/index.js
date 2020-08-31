import React, { Component } from "react";
import { Container } from "../global-styles";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Container login>
          <section>
            <div>
              <img src={logo} alt="Logo"></img>
            </div>

            <form>
              <label>EMAIL</label>
              <input type="text" />
              <label>SENHA</label>
              <input type="password" />

              <Link to="/intro">
                <div>
                  <button>LOGIN</button>
                </div>
              </Link>
            </form>

            <footer>
              Ainda não possui uma conta ?
              <Link to="/register">Não tenho cadastro</Link>
            </footer>
          </section>
        </Container>
      </div>
    );
  }
}
