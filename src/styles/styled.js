import styled from "styled-components"
import worldMap from "../assets/svg/worldMap.png"

export const Wrapper = styled.section`
    background-color: grey;
    background-image: url(${worldMap}); 
`

export const Header = styled.div`

`

export const InputCep = styled.input`
    padding: 15px;
    width: 30%;
    text-align: center;
    border-radius: 10px;
    border: none;
    margin: 50px 0 10px 30%;
`

export const Button = styled.button`
    padding: 15px;
    border-radius: 10px;
    border: none;
    margin-left: 5px;
`