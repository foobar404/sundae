import React from 'react'
import styled,{css} from "styled-components"
import {mix} from "../util"


const Style = styled.button`
    ${({primary}) => primary ? css`
        ${mix.h(2)}
        ${mix.p(3,6)}
    `:""}    
`

export function Button({children,...rest}) {
    return (
        <Style {...{...rest}}>
            {children}
        </Style>
    )
}
