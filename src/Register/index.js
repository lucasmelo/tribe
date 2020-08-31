import React, { Component } from "react";
import { Container } from "../global-styles";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Container>
          <section>
            <div>
              <img src={logo} alt="Logo"></img>
            </div>
            <form>
              <label>EMAIL</label>
              <input type="text" />
              <label>SENHA</label>
              <input type="password" />

              <label>EMAIL</label>
              <input type="text" />
              <label>SENHA</label>
              <input type="password" />

              <label>EMAIL</label>
              <input type="text" />
              <label>SENHA</label>
              <input type="password" />

              <label>EMAIL</label>
              <input type="text" />
              <label>SENHA</label>
              <input type="password" />

              <Link to="/intro">
                <button>Cadastrar</button>
              </Link>
              <Link to="/login">
                <button>facebook sign</button>
              </Link>
            </form>
            <footer>
              Já tem uma conta ?<Link to="/login">Faça login</Link>
            </footer>
          </section>
        </Container>
      </div>
    );
  }
}
