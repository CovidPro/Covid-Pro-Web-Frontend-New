// Change Two Pass variables with "" to see QRs

import axios from "axios";
import Timeline from "../../timeline/timeline";

let correct = 0;

const SanitizeSignal = () => {
    let sanitizedSignal = "true";
    console.log("Signal From Arduino");

    axios
        .post('http://localhost:5000/sanitize/msg', {})
        .then(res => {
            console.log(res.data);
            console.log(res.data.msg);
            sanitizedSignal = res.data.msg;
        })
        .catch(err => {
            console.log(err);
        });


    if (sanitizedSignal === "") {
        return <div>
            <h1 className="text-center text-4xl">No signal</h1>
            {/*<h1 className="text-center text-4xl">QR</h1>*/}
            <br/>
            <p className="text-center text-4xl">Please Put your hand under the Sanitizer</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <Timeline cur="2"/>
        </div>
    } else if (sanitizedSignal === "true") {
        return <div>
            <p className="text-center text-4xl">Sanitized. You can Enter Shop </p>
            {/*TODO: automate without button - Route to Facemask Detection*/}
            {/*<a className="btn btn-primary" href="/facemask" role="button"> Back to Checking Process </a><br/><br/>*/}
            <br/>
            <br/>
            <br/>
            <br/>
            <Timeline cur="2"/>
        </div>
    } else if (sanitizedSignal === "false") {
        return <div>
            <p className="text-center text-4xl">Not Sanitized. Please Put your hand under the Santizer</p>
            {/*TODO: automate without button - Route to Facemask Detection*/}
            <a className="btn btn-primary" href="/facemask" role="button"> Checking Process </a><br/><br/>
            <br/>
            <Timeline cur="2"/>
        </div>
    } else {
        return <div>
            <h1>Error</h1>
            <p>Please Put your hand under the Sanitizer</p>
        </div>
    }
    {/*Remove length part if need.*/
    }

};

const Signal = () => {
    let signal = "true";
    {/*TODO :  Get this from mobile*/
    }

    console.log("Signal From Mobile");

    axios
        .post('http://localhost:5000/sanitize/msg', {})
        .then(res => {
            console.log(res.data);
            console.log(res.data.msg);
            signal = res.data.msg;
        })
        .catch(err => {
            console.log(err);
        });

    {/*TODO :  Get this from mobile*/
    }


    if (signal === "true") {
        correct = correct + 1;
        return (
            <>
                {/*<p> QR Process Succeed. </p>*/}
                {/*TODO : Add Method for someone who not signed in*/}
                <br/>
                <div className="mt-20">
                    <SanitizeSignal/>
                </div>

            </>
        );
    } else if (signal === "false") {
        return (
            <>
                <div className="mt-20">
                    <p className="text-center text-4xl">QR Scanning Process Failed.</p>
                </div>
                <br/>
                <Timeline cur="2"/>

            </>
        );
    } else {
        return (
            <>
                <div className="qr scan">
                    <div className="flex ">
                        <div className="flex-auto "></div>
                        <div className="flex-auto ">
                            <img src={"./assets/img/Customer.png"} width="400 px"/>
                        </div>
                        <div className="flex-auto ">
                            <img src={"./assets/img/Staff.png"} width="400 px"/>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <Timeline cur="1"/>
                </div>
            </>
        );
    }
};


function QR() {
    console.log("correct" + correct);

    return (
        <div>
            {/*https://app.qr-code-generator.com/manage/?aftercreate=1&count=undefined#!/?folder=all*/}
            <br/>

            {/*TODO : Get the signal from the Mobile app here and route to Sanitize*/}

            <Signal/>


        </div>
    )
}

export default QR;
