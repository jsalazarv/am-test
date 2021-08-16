import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux";
import {ModalProvider} from "react-simple-hook-modal";
import 'react-simple-hook-modal/dist/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ModalProvider>
            <App />
        </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
