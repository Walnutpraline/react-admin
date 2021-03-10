import React from 'react';
import './common/style/frame.css';
import Router from './router/index';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
