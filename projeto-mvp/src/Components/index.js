import React from 'react';
import styled from 'styled-components'

class Formulario extends React.Component{
    constructor(props){
        super (props)
        this.state ={
            usuario: "",
            mensagem: "",
        
        }
    }



render () {
return (
    <div>
        <input type="text" placeholder={'Usuário'}  />
        <input type="text" placeholder={'Mensagem'}  />
        <button >Enviar</button>
    </div>


)
}
}

export default Formulario;