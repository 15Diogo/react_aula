import React from 'react'
import './Card.css'

export default props =>
        <div className='Card'>

                <div className='Body'>
                        {props.tituloHeader}
                </div>
          
                <div className='Conteudo'>
                    {props.children} 
                </div>

                <div className='Footer'>
                        { props.tituloFooter}
                </div>
        </div>
