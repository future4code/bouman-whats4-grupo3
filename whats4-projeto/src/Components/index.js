import React from 'react';
import styled from 'styled-components'

const FormularioContainer = styled.div`
    display: flex;
`

const InputUsuario = styled.input`
    width: 20%;
`

const InputMensagem = styled.input`
    width: 70%;
`

class Formulario extends React.Component{
    constructor(props){
        super (props)
        this.state ={
            usuario: "",
            mensagem: "",
        }
    }


aoUsuarioDigitar = (event) => {
    this.setState({usuario: event.target.value})
}


aoMensagemDigitar = (event) => {
    this.setState({mensagem: event.target.value})
}

render () {
return (
        <FormularioContainer>
            <InputUsuario type="text" placeholder={'Usuário'} onChange={this.aoUsuarioDigitar} value={this.state.usuario} />
            <InputMensagem type="text" placeholder={'Mensagem'} onChange={this.aoMensagemDigitar} value={this.state.mensagem} />
            <button >Enviar</button>
        </FormularioContainer>
)
}
}

export default Formulario;