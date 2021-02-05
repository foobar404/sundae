import React,{useEffect} from 'react'
import {mix} from "../util"
import styled,{css} from "styled-components"
import {themeGet} from "@styled-system/theme-get"
import {useField} from "react-form";


const Style = styled.div`
    ${mix.hw("48px",["100%","100%","350px"])}
    ${mix.row("flex-start","stretch")}
    ${mix.stretch()}
    ${mix.m(4,0)}
    ${mix.children([css`
        ${mix.hw("50%",[3,3])}
        align-self:center;
    `])}

    background:#2E313C;
    color:white;
    border-radius:25px;

    input{color:white;}
    
    input:hover + pre{
        display:none;
    }

    svg{
        max-width:30px;
    }

    pre{
        ${mix.pos("bottom","left")}
        ${mix.p(4,5)}
      
        background:#fff;
        border-radius:0 15px 15px 15px;
        border:2px solid ${themeGet("colors.error.main")};
        transform:none;
    }

`

export function Input({children,validate,onChange,defaultValue="",...rest}) {
    let {value, form, meta:{error}, getInputProps} = useField(rest.name,{validate,defaultValue})

    useEffect(()=>{
        if(onChange)
            onChange(value,form)
    },[value])
    
    return (
        <Style {...{...rest}}>
            {children}
            <input {...{...rest}} {...getInputProps()} />
            <pre hidden={!error}><p error="">{error}</p></pre>
        </Style>
    )
}
