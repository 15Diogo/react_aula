import React from 'react'
import './Card2.css'

export default props =>
        <div className='Card2'>

                <header className='Header'></header>
                        {props.titulo}

                <div className='conteudo'>
                        {props.children}

                </div>

                <div className='Footer'>
                        { props.tituloBaixo}
                </div>

                

        </div>
