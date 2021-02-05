import React from 'react'
import styled from "styled-components"
import {mix} from "../util"
import {GiHamburgerMenu} from "react-icons/gi"
import {BsPerson} from "react-icons/bs"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import {Screen} from "./"


const Style = styled.nav`
    ${mix.pos("top","left")}
    ${mix.row("space-around","center")}
    position:fixed;
    width:100vw;
    height:60px;

    *{color:white}

    svg{
        height:25px;
        width:25px;
    }

    .black{color:black}

    #menu{
        padding:10px;
        background:white;
        border-radius:50%;

        *{color:black;}
    }

    #catagories{
        ${mix.gap(7)}

        *:hover{
            text-decoration: line-through;
        }
    }

    #icons{
        ${mix.gap(5)}
    }
`


export function Nav() {
    return (
        <Style>
            <div>
                <button id="menu">
                    <GiHamburgerMenu/>
                </button>
            </div>

            <Screen.Large grow>
                <div id="catagories">
                    <a className="black" href="">WOMEN</a>
                    <a className="black" href="">MEN</a>
                    <a href="">KIDS</a>
                    <a href="">GIFTS</a>
                </div>
            </Screen.Large>

            <div id="icons">
                <button>
                    <BiSearch/>
                </button>
                <button>
                    <AiOutlineShoppingCart/>
                </button>
                <button>
                    <BsPerson/>
                </button>
            </div>
        </Style>
    )
}
