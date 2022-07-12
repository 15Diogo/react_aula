import React from 'react'
import './Card2.css'

export default props =>
        <div className='Card2'>

                <div className='Header'>
                        {props.tituloHeader}
                </div>

                <div className='conteudo'>
                        {props.children}

                </div>

                <div className='Footer'>
                        { props.tituloFooter}
                </div>  

        </div>
     
