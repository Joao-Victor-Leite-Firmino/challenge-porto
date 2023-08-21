'use client'

import styled from 'styled-components'

const Button = styled.button`
    color: red;
`

export default function MeuBotao(props){
    return (
        <Button>
            {props.name}
        </Button>
    )
}