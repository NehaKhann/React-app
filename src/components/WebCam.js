
import React from "react";
import Webcam from "react-webcam";
import "./WebCam.css"
const videoConstraints = {
  width: 600,
  height: 450,
  facingMode: "user",
};

const WebcamCapture = () => (
  <>
    <h3>Camera</h3>
    <Webcam
      className="web-camera pt-3"
      audio={false}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
    >

    </Webcam>
  </>
);

export default WebcamCapture