import { createGlobalStyle } from "styled-components";
import background from "./assets/img/background.png";
import halfEllipseOrange from "./assets/img/half-ellipse-orange.png";
import ellipse from "./assets/img/ellipse.png";
import halfEllipseBlue from "./assets/img/half-ellipse-blue.png";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap');
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: Montserrat;
  }
  html,body {
    height: 100%;
  }
`;

export const Background = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export const EllipseBackground = styled.div`
  background-image: url(${halfEllipseOrange}), url(${ellipse}),
    url(${halfEllipseBlue});
  background-repeat: no-repeat;
  background-position: 0px 23px, 300px 155px, 0 591px;
  background-attachment: fixed;
  /* @media (max-width: 800px) {
    background-position: 0px 23px, 721px 155px, 0 591px;
  } */
`;

export const Wrapper = styled.div`
  div {
    display: flex;
    justify-content: ${(props) =>
    props.imgcontainer ? "center" : "space-between"};
    div {
      padding-top: 50px;
    }
    img {
      padding-top: ${(props) => (props.imgcontainer ? "120px" : "50px")};
      padding-bottom: 50px;
    }
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 50px 50px 0 50px;
  height: ${(props) =>
    props.login || props.profile
      ? "100vh"
      : "initial"};
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 26px;
      line-height: 32px;
      text-align: center;
      color: #FFFFFF;
    }
    p {
      margin-top: 2em;
      font-style: italic;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      color: rgba(255, 255, 255, 0.8);
    }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    label {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #ffffff;
    }
    input {
      height: 40px;
      border-radius: 8px;
      border: none;
      background: #47484cad;
      border-bottom: 3px solid #e57728;
      color: #ffffff;
      padding: 0 15px;
      font-size: 16px;
      width: 100%
    }
    h4 {
      padding-top: 5px;
      color: red;
      font-weight: bold;
    }
      button {
        width: 100%;
        height: 56px;
        background: #e57728;
        border-radius: 8px;
        border: none;
        color: #ffffff;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
    div {
      margin-bottom: 15px;
    }
  }
  footer {
    display: flex;
    text-align: center;
    margin-top: 5em;
    margin-bottom: 2em;
    justify-content: ${(props) =>
    props.register
      ? "center"
      : "initial"};;
    flex-direction:  ${(props) =>
    props.login
      ? "column"
      : "row"};
    color: #E5E5E5;
    a {
      color: #E5E5E5;
      
    }
  };
  aside {
   display: flex;
   justify-content: center;
   padding: 3em 3em;
  }
`;

export const Topic = styled.div`
  margin: 20px 5px;
  height: 60px;
  background: #47484c;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
