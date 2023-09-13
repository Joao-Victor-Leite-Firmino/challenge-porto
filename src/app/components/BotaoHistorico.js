'use client'
import styled from 'styled-components'
import Image from 'next/image'


const Button = styled.button`
    background-color: white;
    color: black;
    font-weight: bold;
    width: 60%;
    height: 4.5em;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    margin: 1em 5.2em;
    font-size: 15px
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
            <p>Histórico de assistências</p>
            </div>
        </Button>
    )
}