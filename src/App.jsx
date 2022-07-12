import React from 'react'

import './index.css'// pra pegar o css criado
import Primeiro from './components/Primeiro'
//import Login from './components/Login'
import ComFilhos from './components/ComFilhos'
//import ComParametro from './components/ComParametro'
import Card from './components/Layout/Card'
//import Card from '.components/Layout/Card2'
//import Login from './components/Login'
import './App.css'





export default props =>


  <div className='App'>  
     
      <Card tituloHeader="Titulo Acima" tituloFooter="Exercicio X">
           <p>teste</p>
      </Card>
      <Card tituloFooter="Exercicio primeiro">
            <Primeiro>

            </Primeiro>
      </Card>
      <Card tituloFooter="Exercicio primeiro">
          <ComFilhos>
            <ul>
            <li>Ana Maria</li>
            <li>Marcos Antônio</li>
            <li>joana Claudia</li>
            <li>joana Claudia</li>
          

             </ul>
          </ComFilhos>
      </Card>
 
      
    </div>

    