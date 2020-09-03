import React from "react";
import { Background } from "./global-styles";
import Routes from "./routes";
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Background>
        <Routes />
      </Background>
    </PersistGate>
  </Provider>
);

export default App;
