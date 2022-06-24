import React from 'react'
import  ReactDOM from 'react-dom'
import './index.css'// pra pegar o css criado
import Primeiro from './components/Primeiro'
import Formulario from './components/Formulario'

ReactDOM.render(
   
     <Primeiro></Primeiro>,
        document.getElementById('root')
    
)

ReactDOM.render(
    <Formulario></Formulario>,
    document.getElementById('cabecalho')

)