import React from "react";
import { Background } from "./global-styles";
import Routes from "./routes";
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Background>
        <Routes />
      </Background>
    </Provider>
  );
}

export default App;
