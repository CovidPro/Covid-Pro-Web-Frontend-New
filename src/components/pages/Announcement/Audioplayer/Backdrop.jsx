import React, {useEffect} from "react";

import Wave from 'react-wavify';


const Backdrop = ({activeColor, trackIndex, isPlaying}) => {
    useEffect(() => {
        document.documentElement.style.setProperty("--active-color", activeColor);
    }, [trackIndex, activeColor]);


    return (
        <div>

            <div className={`color-backdrop ${isPlaying ? "playing" : "idle"}`}/>
        </div>

    )
        ;
};

export default Backdrop;
