'use client'
import styled from 'styled-components'
import Image from 'next/image'


const Button = styled.button`
    background-color: white;
    color: black;
    font-weight: bold;
    width: 10em;
    height: 4.5em;
    border-radius: 10px;
    display: flex;
    align-items: center;
`

export default function BotaoHist(props){
    return (
        <Button>
             <Image 
             src = "/historia.svg"
             width={25}
             height={25}
             alt = "Histórico"
             priority
             />
            <div>
            {props.text}
            </div>
        </Button>
    )
}