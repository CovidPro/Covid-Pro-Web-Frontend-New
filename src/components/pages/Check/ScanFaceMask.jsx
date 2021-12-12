import React, {useEffect, useContext} from 'react';
import MaskDetection from "./maskdetectionmodule";

function ScanFaceMask() {

    return (
        <div>
            <div className="FaceMask">
                <br/>

                <MaskDetection/>

                <a className="btn btn-primary" href="/qr" role="button"> Checking Process </a><br/><br/>
            </div>
        </div>
    );
}

export default ScanFaceMask;
