import React from 'react'
import './Login.css'


function Login() {
    return (
        
        <div className='Login'>
            
          <form>
                <table>
                    
                
                     
                        <td><label htmlFor='usuario' >Usuário</label></td>
                        <td><input id='usuario' type="email"></input></td>
                        <td><label htmlFor='senha' >Senha</label></td>
                        <td><input type='password'></input></td>
                        <td><button className='card' type='submit'>Entrar</button></td>
                        <td><button className='card' type='reset'>Limpar</button></td>
                    
                        <td><a href='home.html'>Esqueci minha senha</a></td>
                    </table>
                </form>
         </div>      
    )       
}
export default Login