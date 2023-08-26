'use client'
import styled from 'styled-components'
import Image from 'next/image'


const Button = styled.button`
    background-color: #3A42FF;
    color: white;
    font-weight: bold;
    border: none;
    width: 10em;
    height: 4.5em;
    border-radius: 10px;
    display: flex;
    align-items: center;
`

export default function BotaoAssist(props){
    return (
        <Button>
             <Image 
             src = "/ferramentinha.svg"
             width={25}
             height={25}
             alt = "ferramentas"
             priority
             />
            <div>
            {props.text}
            </div>
        </Button>
    )
}
