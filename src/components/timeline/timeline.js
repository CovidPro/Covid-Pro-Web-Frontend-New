import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";

export default function Timeline(props) {
    const step1Content = <h1></h1>;
    const step2Content = <h1></h1>;
    const step3Content = <h1></h1>;

    // setup step validators, will be called before proceeding to the next step
    function step2Validator() {
        return true;
    }

    function step3Validator() {
        // return a boolean
    }
    return (
        <div className="App">
            <StepProgressBar
                startingStep={props.cur}
                steps={[
                    {
                        label: "Facemask Scan",
                        name: "Facemask Scan",
                        content: step1Content
                    },
                    {
                        label: "QR",
                        name: "QR",
                        content: step2Content
                    },
                    {
                        label: "Sanitizing and Teprature Scanning",
                        name: "Sanitizing and Teprature Scanning",
                        content: step3Content,
                        validator: step2Validator
                    }
                ]}
            />
        </div>
    );
}
