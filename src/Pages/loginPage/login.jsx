import React from "react";
import styled from "styled-components";
import { AppRoutes } from "../../routs";
export const Text__h1 = styled.h1`

color: black;
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
top: 50%;
}

`
export const Login_button = styled.button`
max-width: 400px;
color: black;
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
top: 70%;
}

`
export function LoginPage (){
    return(
    <div>
    <Text__h1>"Страница входа"</Text__h1>
    <Login_button type="button"> Авторизация </Login_button>
    </div>

    )
}