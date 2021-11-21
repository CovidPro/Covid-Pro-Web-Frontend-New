import React from "react";


const Temp = (props) => {
    if (props.temperature === undefined) {
        return (
            <>
                <h1>
                    Detecting Temperature...
                </h1>
                <h4>
                    Please come near the device {props.temperature}
                </h4>
            </>
        )
            ;
    } else {
        const maxBodyTemp = 37.5;
        // if temperature is higher than body temperature, return red
        if (props.temperature > maxBodyTemp) {
            return (
                <div>
                    <p className="temp-text">Temp is {props.temperature}°C. You can't go inside.</p>
                    {/*TODO: automate without button - Route to Facemask Detection*/}
                    <a className="btn btn-primary" href="/facemask" role="button"> Checking Process </a><br/><br/>
                </div>
            );
        }

        return (
            <>
                <p className="temp-text">Temp is {props.temperature}°C. You can go inside.</p>
                {/*TODO: automate without button - Route to QR Detection*/}
                <a className="btn btn-primary" href="/QR" role="button"> Checking Process </a><br/><br/>
            </>
        )
    }
};

function Temperature(props) {
    return (
        <div>
            { /*TODO : Get temperature from arduino and show it here*/}
            <Temp temperature ={props.temperature}/>

        </div>
    );
}

export default Temperature;