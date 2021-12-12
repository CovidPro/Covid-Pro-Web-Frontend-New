//Dependencies
import React, {useEffect, useRef, useState} from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import {drawRect} from "./drawReact";
import { nextFrame } from "@tensorflow/tfjs";
import {Link} from "react-router-dom";
import Timeline from "../../timeline/timeline";

function MaskDetection() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    //https://facemaskcovidpro.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json

    // ibmcloud cos bucket-cors-put --bucket facemaskcovidpro --cors-configuration file://corsconfig.json

    const runCoco = async () => {
        // 3. TODO - Load network
        console.log("Loading Model...")
        const net = await tf.loadGraphModel('https://facemaskcovidpro.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json')
        console.log("Model Loaded")
        // Loop and detect hands
        setInterval(() => {
            detect(net);
        }, 16.7);
    };

    const detect = async (net) => {
        // Check data is available
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // 4. TODO - Make Detections
            const img = tf.browser.fromPixels(video)
            const resized = tf.image.resizeBilinear(img, [640,480])
            const casted = resized.cast('int32')
            const expanded = casted.expandDims(0)
            const obj = await net.executeAsync(expanded)

            console.log("Objects")
            console.log(obj[4])
            const boxes = await obj[4].array()
            const classes = await obj[5].array()
            const scores = await obj[3].array()

            // Draw mesh
            const ctx = canvasRef.current.getContext("2d");

            // drawSomething(obj, ctx)
            requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.9, videoWidth, videoHeight, ctx)});

            tf.dispose(img)
            tf.dispose(resized)
            tf.dispose(casted)
            tf.dispose(expanded)
            tf.dispose(obj)

            //TODO : add route method to go to next page
            if (scores[0] > 0.9) {
                <Link to="/qr"/>
            }
        }
    };

    useEffect(()=>{runCoco()},[]);

    return (
        <div className="App">
            <header className="App-header">
                <Webcam
                    ref={webcamRef}
                    muted={true}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 640,
                        height: 480,
                    }}
                />

                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 8,
                        width: 640,
                        height: 480,
                    }}
                />
            </header>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="mt-48 pt-48">

                <Timeline cur="0"/>
            </div>
        </div>
    );
}
export default MaskDetection;
