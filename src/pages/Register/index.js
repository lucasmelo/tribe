import React from "react";
import { Container } from "../../global-styles";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

const Register = ({ login }) => (
  <div>
    <Container>
      <section>
        {login.map(account => (
          <div key={account.id}>
            <h1>{account.email}</h1>
            <h1>{account.password}</h1>
          </div>
        ))}
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

function mapStateToProps(state) {
  const { loginReducer } = state
  return { login: loginReducer }
}

export default connect(mapStateToProps)(Register) 