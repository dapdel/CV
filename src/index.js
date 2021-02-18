import React from 'react';
import ReactDOM from 'react-dom';
//import './index.scss';
import './styles/main.scss';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { Section0Header } from './components/Section0_header';
import { Section1Accueil } from './components/Section1_accueil';
import { Section2APropos } from './components/Section2_a_propos';
import { Section3Competences } from './components/Section3_competences';
import { Section4Parcours } from './components/Section4_parcours';
import Section5Portfolio from './components/Section5_portfolio';
import { Section6Interets } from './components/Section6_interets';
import { Section7Contact } from './components/Section7_contact';

ReactDOM.render(
  <React.StrictMode>
    <Section0Header />
    <Section1Accueil />
    <Section2APropos />
    <Section3Competences />
    <Section4Parcours />
    <Section5Portfolio/>
    <Section6Interets/>
    <Section7Contact/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// <Section0Header />
reportWebVitals();
/*
    <Section0Header />
    <Section1Accueil />
    <Section2APropos />
    <Section3Competences />
    <Section4Parcours />
    <Section5Portfolio/>
    <Section6Interets/>
    <Section7Contact/>

*/




