import {sign} from "@tensorflow/tfjs";

const Signal = () => {
    {/*TODO :  Get this from mobile*/}
    const signal = "";

    if (signal === "pass") {
        return (
            <>

            </>
        );
    }
    else if (signal === "fail") {
        return (
            <>

            </>
        );
    }
    else {
        return (
            <>

            </>
        );
    }
};

function QR () {
    return (
        <div>
            {/*https://app.qr-code-generator.com/manage/?aftercreate=1&count=undefined#!/?folder=all*/}
            <h1>QR</h1>
            <div className="qr-code">
                <img src={"./assets/img/Customer.png"} width="400 px"/>
                <img src={"./assets/img/Staff.png"} width="400 px"/>
            </div>

            {/*TODO : Get the signal from the Mobile app here and route to Sanitize*/}

            <Signal/>

        </div>
    )
}

export default QR;