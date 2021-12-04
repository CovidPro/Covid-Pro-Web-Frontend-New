import React, {useEffect, useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import UserContext from '../../../context/userContext';
import Temp from "./Temp";

function ScanTemprature() {
    return (
        <div>

            <div className="FaceMask">
                <Temp temperature="12.5"/>
                <br/><br/>
            </div>

        </div>
    );
}

export default ScanTemprature;