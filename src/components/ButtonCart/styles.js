import styled from "styled-components";

export const ButtonStyled = styled.button`
    padding: 8px ${props=> `${props.size}px `};
    border-radius: 4px;
    border:none;
    background-color:${props=> props.color === "green" ? "#27AE60" : "#E0E0E0"};
    cursor: pointer;
    color: #FFFFFF;
    :hover{
        background-color:${props=> props.color === "green" ? "#93D7AF" : "##828282"};
    }
`