import React from 'react'

import './Nav.css'

export default props =>
        <div className='Nav'>
            <div className='Header'></div>
              <div className='Header'>
                {props.tituloNav}
                <div className='Menu'>
                  {props.children}
                </div>
                 
              </div>


        </div>