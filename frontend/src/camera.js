import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import draw from "./utilities";
import { Timer } from "./components/timer";


export const Camera = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const blazeface = require("@tensorflow-models/blazeface");

  const runFacedetection = async () => {
    const model = await blazeface.load();
    console.log("FaceDetection Model is Loaded..");
    setInterval(() => {
      detect(model);
    }, 1000);
  };

  const returnTensors = false;

  const detect = async (model) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      //Set video height and width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      //Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make detections

      const prediction = await model.estimateFaces(video, returnTensors);

      if (prediction.length === 0) alert("No face detected");
      if (prediction.length >= 2) alert("Multiple faces detected");

      const ctx = canvasRef.current.getContext("2d");
      draw(prediction, ctx);
    }
  };

  runFacedetection();

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Webcam
            ref={webcamRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",

              left: 0,
              right: 80,
              textAlign: "center",
              zIndex: 9,
              width: 300,
              height: 300,
            }}
          />

          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 80,
              textAlign: "center",
              zIndex: 9,
              width: 300,
              height: 300,
            }}
          />
        </header>
      </div>
    </div>

  );
};
