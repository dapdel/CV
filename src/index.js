import React from 'react';
import ReactDOM from 'react-dom';
//import './index.scss';
import './styles/main.scss';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { Section0Header } from './components/section0_header';
import { Section1Accueil } from './components/section1_accueil';
import { Section2APropos } from './components/section2_a_propos';
import { Section3Competences } from './components/section3_competences';
import { Section4Parcours } from './components/section4_parcours';
import { Section5Portfolio } from './components/section5_portfolio';


ReactDOM.render(
  <React.StrictMode>
    <Section0Header />
    <Section1Accueil />
    <Section2APropos />
    <Section3Competences />
    <Section4Parcours />
    <Section5Portfolio/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// <Section0Header />
reportWebVitals();
