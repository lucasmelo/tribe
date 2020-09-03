import React, { Component } from "react";
import {
  Container,
  EllipseBackground,
  Wrapper,
} from "../../global-styles";
import logoArt from "../../assets/img/logo-art.png";
import buttonNextSide from "../../assets/img/button-next-side.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export default class TribeIntro extends Component {
  render() {
    return (
      <div>
        <EllipseBackground>
          <Container intro>
            <section>
              <Wrapper imgcontainer>
                <div>
                  <img src={logoArt} alt="Logo"></img>
                </div>
                <h1>Qual a sua tribo ?</h1>
                <p>
                  Para começar a usar seu perfil, primeiro nos informe sobre o
                  que você curte.
                </p>
              </Wrapper>
              <Wrapper buttoncontainer>
                <div>
                  <div>
                    <img src={buttonNextSide} alt="Logo"></img>
                  </div>
                  <div>
                    <Link to="/select">
                      <BiRightArrowAlt size={30} color="#ffff" />
                    </Link>
                  </div>
                </div>
              </Wrapper>
            </section>
          </Container>
        </EllipseBackground>
      </div>
    );
  }
}
