import React from 'react'
import './Card.css'

export default props =>
        <div className='Card'>

                <div className='Body'>
                        {props.tituloBody}
                </div>
          
                <div className='conteudo'>
                    {props.children} 
                </div>

                <div className='Footer'>
                        { props.titulo}
                </div>


        </div>
