import React from 'react'
import { ButtonStyled } from './styles'
export default function ButtonRemoveAll({children, size, color}) {
    return (
        <div>
            <ButtonStyled size={size} color={color}>{children}</ButtonStyled>
        </div>
    )
}