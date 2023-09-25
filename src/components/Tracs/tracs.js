import "../Tracs/tracks.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import React, { useState } from "react";
import styled from "styled-components";

const StyleCenterblock__h2 = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
`

export function Tracks() {
    const [contentVisible, setContentVisible] = useState(false);
    setTimeout(() => {
      setContentVisible(true);
    }, 4000);

    return(
    <StyleCenterblock__h2>{contentVisible ? <span>Tracks</span> : <span>Треки</span>}</StyleCenterblock__h2>
    )}
