import React from 'react'
import {Layout,Screen} from "../../components"
import {mix} from "../../util"
import {Login} from "./components/Login"
import {Signup} from "./components/Signup"
import styled from "styled-components"
import {Switch,Route} from "react-router-dom"
import img from "../../assets/background.jpeg"
import {themeGet} from "@styled-system/theme-get"


const Style = styled.main`
    ${mix.row("center","stretch")}
    ${mix.stretch()}
    background:#1F2128;

    section{max-width:50%}

    #left{
        border-radius:0 20px 20px 0;
        overflow:hidden;

        img{min-height:100%}
    }

    @media(max-width:${themeGet("breakpoints.lg")}){
        section{max-width:100%}
    }

`


export function Auth() {
    return (
        <Layout>
            <Style>
                <Screen.Large grow>
                    <section id="left">
                        <img src={img} alt=""/>
                    </section>
                </Screen.Large>

                <Switch>
                    <Route exact path="/auth">
                        <Login/>
                    </Route>

                    <Route path="/auth/signup">
                        <Signup/>
                    </Route>
                </Switch>

            </Style>
        </Layout>
    )
}
