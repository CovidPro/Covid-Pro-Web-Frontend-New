import React, {useEffect, useContext} from 'react';
import MaskDetection from "./maskdetectionmodule";
import Timeline from "../../timeline/timeline";

function ScanFaceMask() {

    return (
        <div>
            <div className="FaceMask">
                <br/>
                {/*<h1>Scan Face Mask</h1><br/><br/>*/}
                <MaskDetection/>

                <a className="btn btn-primary" href="/qr" role="button"> Checking Process </a><br/><br/>
            </div>
        </div>
    );
}

export default ScanFaceMask;