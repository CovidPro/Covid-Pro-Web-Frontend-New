import React, {useEffect, useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import UserContext from '../../../context/userContext';
import MaskDetection from "./maskdetectionmodule";

function ScanFaceMask() {


    return (
        <div>
            <div className="FaceMask">
                <h1>Scan Face Mask</h1><br/><br/>
                <MaskDetection/>
                <a className="btn btn-primary" href="/next" role="button"> Checking Process </a><br/><br/>
            </div>
        </div>
    );
}

export default ScanFaceMask;