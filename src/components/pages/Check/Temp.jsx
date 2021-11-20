import React from "react";

// If props.temp is undefined, return "--"
// Else, return props.temp
const Temp = props => {
  if (props.temprature === undefined) {
    return "Detecting Temperature...";
  }
  else {
      const maxBodyTemp = 37.5;
      // if temprature is higher than body temperature, return red
      if (props.temprature > maxBodyTemp) {
        return (
          <div>
            <p className="temp-text">Temp is {props.temprature}°C. You can't go inside.</p>
          </div>
        );
      }

    return "Temperature is " + props.temp;
  }
};

function Temperature (props) {
    return (
        <div>
            <h1>
                { /*TODO : Get temperature from arduino and show it here*/}
                <Temp temp={props.temp}/>
            </h1><br/><br/>
        </div>
    );
}

export default Temperature;