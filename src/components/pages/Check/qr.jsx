// Change Two Pass variables with "" to see QRs

const SanitizeSignal = () => {
    const sanitizedSignal = "pass";

    if (sanitizedSignal === "") {
        return <div>
            <h1>No signal</h1>
            <p>Please Put your hand under the Santizer</p>
        </div>
    }
    else if (sanitizedSignal === "pass") {
        return <div>
            <p>Sanitized. Back to Facemask Detection </p>
            {/*TODO: automate without button - Route to Facemask Detection*/}
            <a className="btn btn-primary" href="/facemask" role="button"> Checking Process </a><br/><br/>
        </div>
    }
    else {
        return <div>
            <h1>Error</h1>
            <p>Please Put your hand under the Sanitizer</p>
        </div>
    }
    {/*Remove length part if need.*/}

};

const Signal = () => {
    {/*TODO :  Get this from mobile*/}
    const signal = "pass";

    if (signal === "pass") {
        return (
            <>
                <p> QR Process Succeed. </p>
                {/*TODO : Add Method for someone who not signed in*/}
                <SanitizeSignal />

            </>
        );
    }
    else if (signal === "fail") {
        return (
            <>
                <p>QR Scanning Process Failed.</p>
                <p> Please Sanitize Your self. </p>

            </>
        );
    }
    else {
        return (
            <>
                <div className="qr-code">
                    <img src={"./assets/img/Customer.png"} width="400 px"/>
                    <img src={"./assets/img/Staff.png"} width="400 px"/>
                </div>
            </>
        );
    }
};

function QR () {
    return (
        <div>
            {/*https://app.qr-code-generator.com/manage/?aftercreate=1&count=undefined#!/?folder=all*/}
            <h1>QR</h1>

            {/*TODO : Get the signal from the Mobile app here and route to Sanitize*/}

            <Signal/>

        </div>
    )
}

export default QR;