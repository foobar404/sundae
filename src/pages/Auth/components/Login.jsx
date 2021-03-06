import React from 'react'
import {Input,Form,Button} from "../../../components"
import {mix} from "../../../util"
import styled from "styled-components"
import {HiOutlineMail} from "react-icons/hi"
import {themeGet} from "@styled-system/theme-get"
import {RiFacebookFill} from "react-icons/ri"
import {AiOutlineGooglePlus,AiOutlineTwitter,AiOutlineInstagram,AiOutlineFacebook} from "react-icons/ai"
import {TiSocialInstagram} from "react-icons/ti"
import {FiTwitter} from "react-icons/fi"
import {BsArrowRight} from "react-icons/bs"
import {Link} from "react-router-dom"


const Style = styled.section`
    ${mix.col("center","flex-start")}
    ${mix.p(8,8,1,8)}
    position:relative;

    *{color:white;}

    a{color:${themeGet("colors.primary.main")}}

    p{${mix.m(6,1)}}

    form{width:100%}

    label{font-size:12px;}

    #signIn{margin-top:30px;}
    #signIn,#signIn *{
        color:black;
        font-size:13px;
    }

    #sso{
        ${mix.row()}
        ${mix.gap(4)}
        &>*{
            ${mix.col()}
            height:30px;
            width:30px;
            border-radius:50%;
            background:white;
            *{color:black;}
        }
    }

    footer{
        max-width:100%;
        overflow:hidden;

        *{
            color:#fff5;
            font-size:18px;
        }

        svg{height:25px;width:25px;}

        .line{
            width:50px;
            height:2px;
            background:#fff5
        }

        #social{
            ${mix.gap(5)}
            ${mix.row()}
        }
    }

    @media(max-width:${themeGet("breakpoints.lg")}){
        ${mix.p(8,5,4,5)}
        
        footer{${mix.m(1,1,1,5)}}
    }
`


export function Login() {
    return (
        <Style>
            <h2>Sign In</h2>
            <p>Dont have an account? <Link to="/auth/signup">Sign Up</Link></p>

            <Form onSubmit={()=>{}}>
                <label>
                    your email
                            <Input required name="email" type="email" placeholder="Enter Email">
                        <HiOutlineMail />
                    </Input>
                </label>

                <label>
                    your password
                            <Input required name="password" type="password" placeholder="Enter Password">
                        <HiOutlineMail />
                    </Input>
                </label>

                <Link to="/tone"><Button primary id="signIn">SIGN IN <BsArrowRight /></Button></Link>
            </Form>

            <p>Or Sign in with</p>

            <div id="sso">
                <button><RiFacebookFill /></button>
                <button><AiOutlineGooglePlus /></button>
                <button><TiSocialInstagram /></button>
                <button><AiOutlineTwitter /></button>
            </div>

            <footer>
                <div id="social">
                    <div className="line"></div>
                    <button><AiOutlineInstagram /></button>
                    <button><AiOutlineFacebook /></button>
                    <button><FiTwitter /></button>
                    <div className="line"></div>
                </div>
                <p>Yolo © 2020. All rights reserved</p>
            </footer>
        </Style>
    )
}
