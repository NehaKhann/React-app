
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./WebCam.css"
import labels from '../model/labels.json'
import * as cvstfjs from "@microsoft/customvision-tfjs";
import { Button, Row } from "react-bootstrap";


const videoConstraints = {
  width: 600,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = ({
  webcamRef,
  predictionFunction, modelStart }) => {

  return (
    <>
      <Row>
        <Webcam
          ref={webcamRef}
          className="web-camera pt-3"
          audio={false}
          id="img"
          screenshotQuality={1}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </Row>
      <Row style={{ justifyContent: 'center ' }}>
        {!modelStart && <Button style={{ marginTop: 20, width: '20%', alignSelf: 'center' }} 
        onClick={predictionFunction}>Start Shopping</Button>}
      </Row>
    </>
  );
}

export default WebcamCapture