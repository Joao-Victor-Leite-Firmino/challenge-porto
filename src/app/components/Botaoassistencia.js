'use client'
import styled from 'styled-components'
import Image from 'next/image'


const Button = styled.button`
    background-color: white;
    color: black;
    font-weight: bold;
    width: 100%;
    height: 4.5em;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function BotaoAssist(props){
    console.log(props.src)
    return (
        <Button>
            <div>
             <Image 
             src={props.src}
             width={25}
             height={25}
             alt={props.text}
             priority
             />
             </div>
            <div>
            {props.text}
            </div>
        </Button>
    )
}
