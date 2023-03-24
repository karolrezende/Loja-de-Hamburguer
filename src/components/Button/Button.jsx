import React from 'react'
import { ButtonStyled } from './styles'
export default function Button({children, size, color, value, search}) {
    return (
        <div>
            <ButtonStyled size={size} color={color} onClick={()=> search(value)} >{children}</ButtonStyled>
        </div>
    )
}
