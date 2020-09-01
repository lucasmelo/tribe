import React from "react";
import { Container } from "../../global-styles";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import RegisterForm from './registerForm'

const Register = ({ login }) => (
  <div>
    <Container register>
      <section>
        <aside>
          <img src={logo} alt="Logo"></img>
        </aside>
        <RegisterForm />
        <footer>
          Já tem uma conta ?<Link to="/login">Faça login</Link>
        </footer>
      </section>
    </Container>
  </div>
);

function mapStateToProps(state) {
  const { loginReducer } = state
  return { login: loginReducer }
}

export default connect(mapStateToProps)(Register) 