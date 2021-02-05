import React from 'react'
import styled,{css} from "styled-components"
import {mix} from "../util"
import {themeGet} from "@styled-system/theme-get"


const Style = styled.button`
    ${mix.row()}
    ${mix.gap(3)}

    ${({primary}) => primary ? css`
        ${mix.h(2)}
        ${mix.p(3,6)}
        background:${themeGet("colors.primary.main")};
        border-radius:25px;
    `:""}    
`


export function Button({children,...rest}) {
    return (
        <Style {...{...rest}}>
            {children}
        </Style>
    )
}
