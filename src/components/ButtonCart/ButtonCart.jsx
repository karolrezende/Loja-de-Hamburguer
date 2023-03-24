import React from 'react'
import { ButtonStyled } from './styles'
export default function ButtonCart({children, size, color, addCartOn, id}) {
    return (
        <div>
            <ButtonStyled size={size} onClick={()=> addCartOn(id)} color={color}>{children}</ButtonStyled>
        </div>
    )
}
