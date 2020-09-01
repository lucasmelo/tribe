import React from "react";
import { Container } from "../../global-styles";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import LoginForm from './loginForm'

const Login = () => (
  <Container login>
    <section>
      <aside>
        <img src={logo} alt="Logo"></img>
      </aside>
      <LoginForm />
      <footer>
        Ainda não possui uma conta ?
        <Link to="/register">Não tenho cadastro</Link>
      </footer>
    </section>
  </Container>
)

export default Login;
