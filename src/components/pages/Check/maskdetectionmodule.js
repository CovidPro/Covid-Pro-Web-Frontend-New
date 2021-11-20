//Dependencies
import React, {useEffect, useRef} from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import {drawRect} from "./drawReact";

function MaskDetection() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const detectObj = async (net) => {
        // Check data is available
        if (typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4)
        {
            // Set canvas height and width
            canvasRef.current.width = webcamRef.current.video.videoWidth;
            canvasRef.current.height = webcamRef.current.video.videoHeight;

            // Make Detections
            const obj = await net.detect(webcamRef.current.video,1,0.9);
            // TODO: Load Next Page


            // Draw Rect
            const ctx = canvasRef.current.getContext("2d");
            drawRect(obj, ctx);
        }
    };

    const runCoco = async () => {
        const net = await cocossd.load();
        console.log("Model loaded.");
        setInterval( ()=> detectObj(net),10)
    };

    useEffect(()=>{ runCoco() },[]);

    return (
        <div className="App">
            <header className="App-header">
                Model is Loading please wait...
                <Webcam
                    ref={webcamRef}
                    muted={true}
                    style={{

                        marginLeft: "auto",
                        marginRight: "auto",
                        textAlign: "center",
                        width: "auto",
                        height:"auto",
                    }}
                />

                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        textAlign: "center"
                    }}
                />
            </header>
        </div>
    );
}

export default MaskDetection;