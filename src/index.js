import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
import {Provider} from 'react-redux'
import {store} from '../src/redux/store'
import { DistrictProvider } from './context/DistrictNow';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <DistrictProvider>
    <App />
    </DistrictProvider>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

