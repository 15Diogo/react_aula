  import React from 'react'
  // abaixo um tipo diferente de fuction que no componente primeiro eu chamo de outro jeito
  function Formulario(){
        return(
            <div>
                <form>
                    <table>
                        <td><label htmlFor='usuario' >Usuário</label></td>
                        <td><input id='usuario' type="email"></input></td>
                        <td><label htmlFor='senha' >Senha</label></td>
                        <td><input type='password'></input></td>
                        <td><button type='submit'>Entrar</button></td>
                        <td><button type='reset'>Limpar</button></td>
                        <td><a href=''>Esqueci minha senha</a></td>
                    </table>
                </form>
            </div>
    )
  }
   export default Formulario