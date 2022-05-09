import React from 'react';//Sin punto busca en node modules
import ReactDOM from 'react-dom';
import './index.css';//Con punto busca en nuestros propios archivos. Así lo han definido en React
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
