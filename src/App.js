import React from 'react';
import './common/style/frame.css';
import renderRoutes from './utils/renderRoutes';
import routes from './router/index';
import { BrowserRouter, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <BrowserRouter>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
