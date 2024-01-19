import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

/*
  enfocarlo tipo 'digital designer'
  modo oscuro/claro con la media query de prefferred mode o como se llame
  buena navegación en los tres tamaños y en los proyectos sobre todo
  proyectos explicados con detalle
  un gráfico 3D al final de la home
  textos sinceros que hablen de mi
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
