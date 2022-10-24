
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

const WebcamCapture = () => {

  const webcamRef = useRef()
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);

  async function predictionFunction() {
    setVideoHeight(webcamRef.current.video.videoHeight);
    setVideoWidth(webcamRef.current.video.videoWidth);
    //testing azure vision api
    let model = new cvstfjs.ObjectDetectionModel();
    await model.loadModelAsync("model.json");
    const predictions = await model.executeAsync(
      document.getElementById("img")
    );

    let detected_boxes, detected_scores, detected_classes;
    [detected_boxes, detected_scores, detected_classes] = predictions;
    var cnvs = document.getElementById("myCanvas");

    cnvs.style.position = "absolute";

    var ctx = cnvs.getContext("2d");
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);

    if (predictions[0].length > 0) {
      for (let n = 0; n < predictions[0].length; n++) {
        // Check scores
        if (predictions[1][n] > 0.4) {
          const p = document.createElement("p");
          let detectedArray = detected_boxes.map((box, i) => ({
            Label: detected_classes[i],
            prob: detected_scores[i].toFixed(2)
          }));
          console.log("DETECTED ARRAY", detectedArray[0]) // {Label: index of detected item , prob: %}
          let detectedIndex = detectedArray[0].Label
          let label = labels.labels[detectedIndex].name

          p.innerText =
            label +
            ": " +
            Math.round(parseFloat(predictions[1][n]) * 100) +
            "%";

          let bboxLeft =
            predictions[0][n][0] * webcamRef.current.video.videoWidth;
          let bboxTop =
            predictions[0][n][1] * webcamRef.current.video.videoHeight;
          let bboxWidth =
            predictions[0][n][2] * webcamRef.current.video.videoWidth -
            bboxLeft;
          let bboxHeight =
            predictions[0][n][3] * webcamRef.current.video.videoHeight -
            bboxTop;

          ctx.beginPath();
          ctx.font = "28px Arial";
          ctx.fillStyle = "red";

          ctx.fillText(
            label +
            ": " +
            Math.round(parseFloat(predictions[1][n]) * 100) +
            "%",
            bboxLeft,
            bboxTop + 70
          );

          ctx.rect(bboxLeft, bboxTop + 80, bboxWidth, bboxHeight);
          ctx.strokeStyle = "#FF0000";

          ctx.lineWidth = 3;
          ctx.stroke();
        }
      }
      setTimeout(() => predictionFunction(), 200);
    }
  }

  return (
    <>
      <Row>
        <canvas
          id="myCanvas"
          width={videoWidth}
          height={videoHeight}
          style={{ backgroundColor: "transparent" }}
        />
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
      <Row style = {{justifyContent:'center '}}>
        <Button style = {{marginTop:20, width :'20%', alignSelf:'center'}} onClick={predictionFunction}>Start Shopping</Button>
      </Row>
    </>
  );
}

export default WebcamCapture