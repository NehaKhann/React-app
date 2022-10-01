
import React from "react";
import Webcam from "react-webcam";
import "./WebCam.css"
const videoConstraints = {
  width: 600,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = () => (

    <Webcam
      className="web-camera pt-3"
      audio={false}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
    >

    </Webcam>

);

export default WebcamCapture