import React from 'react'
import { ButtonStyled } from './styles'
export default function ButtonRemove({children, size, color, id, remove}) {
    return (
        <div>
            <ButtonStyled size={size} color={color} onClick={()=>remove(id)}>{children}</ButtonStyled>
        </div>
    )
}
