'use client'
import styled from 'styled-components'

const StyledText = styled.p`
  color: white;
  text-align: center;
  justify-content: center;
`;

export default function Titulo(props){
    return(
        <h1>
            {props.text}
        </h1>
    )
}