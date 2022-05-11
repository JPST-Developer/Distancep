import styled, {  createGlobalStyle } from "styled-components"
import worldMap from "../assets/svg/worldMap.png"

export const GlobalStyle = createGlobalStyle`
    body{ 
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`

export const Wrapper = styled.section`
    background-color: grey;
`

export const Header = styled.div`
    height: 50vh;
    background-image: url(${worldMap}); 
    background-color: #334356;
    text-align: center;
    
`

export const Title = styled.h1`
    font-family: 'Koulen', cursive;
    font-size: 60px;
    color: #213448;
    span {
        color: #6C7C8D;
        font-family: 'Prosto One', cursive;
        }
`

export const InputCep = styled.input`
    padding: 15px;
    width: 30%;
    text-align: center;
    border-radius: 10px;
    border: none;
`

export const Button = styled.button`
    padding: 15px;
    border-radius: 10px;
    border: none;
    margin-left: 5px;
`