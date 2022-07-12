import React from 'react';
import  ReactDOM from 'react-dom'
import App from './App';
import Nav from './components/Layout/Nav';
import { DiAndroid } from "react-icons/di";
import { DiHome } from "react-icons/di";



ReactDOM.render(
      <App></App>,
      document.getElementById('root')
)

ReactDOM.render(
<Nav tituloNav="teste">
      <menu>
           <DiAndroid/><a>Home </a>
           <DiHome></DiHome> <a>Sobre </a>
            <a>Perfil </a>
      </menu>
</Nav>,

      document.getElementById('cabecalho')
      
)
            
            
