import "../Tracs/tracks.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import React, { useState } from "react";


export function Tracks() {
    const [contentVisible, setContentVisible] = useState(false);
    setTimeout(() => {
      setContentVisible(true);
    }, 4000);

    return(
    <h2 className="centerblock__h2">{contentVisible ? <span>Tracks</span> :  <Skeleton className="skeleton_class" />}</h2>)
}
