import React from 'react';
import  ReactDOM from 'react-dom'
import App from './App';
import Nav from './components/Layout/Nav';
import { DiAndroid } from "react-icons/di";
import Footer from './components/Footer';
import { FaHouseDamage } from "react-icons/fa"
import { FaRegUserCircle} from "react-icons/fa";





ReactDOM.render(
      <App></App>,
      document.getElementById('root')
)


ReactDOM.render(
      <Nav>
            <image ></image>
      <menu>    
            <FaHouseDamage/><a href='https://multicanais.com/tvonlinehd/'> Home </a>
            <a><FaRegUserCircle/> Sobre </a>
            <a><DiAndroid/> Perfil </a>
      </menu>
      </Nav>,

      document.getElementById('cabecalho')
      
)

ReactDOM.render(
      <Footer>
            
            
      </Footer>,
      document.getElementById('footer')

)
            
            