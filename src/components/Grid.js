import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WebcamCapture from "./WebCam"
import CardComp from "./Card";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as cvstfjs from "@microsoft/customvision-tfjs";
import labels from '../model/labels.json'


function GridComp() {
  const navigate = useNavigate();

  const webcamRef = useRef()
  const [cartItems, setCartItems] = useState([])
  const [modelStart, setModelStart] = useState(false)

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  async function predictionFunction() {
    //testing azure vision api
    let model = new cvstfjs.ObjectDetectionModel();
    await model.loadModelAsync("model.json");
    setModelStart(true)

    const predictions = await model.executeAsync(
      document.getElementById("img")
    );

    let detected_boxes, detected_scores, detected_classes;
    [detected_boxes, detected_scores, detected_classes] = predictions;

    let itemDetected = false
    let predictedItem = null

    if (predictions[0].length > 0) {
      for (let n = 0; n < predictions[0].length; n++) {
        // Check scores
        if (predictions[1][n] > 0.4) {
          let detectedArray = detected_boxes.map((box, i) => ({
            Label: detected_classes[i],
            prob: detected_scores[i].toFixed(2)
          }));// {Label: index of detected item , prob: %}
          let detectedIndex = detectedArray[0].Label
          itemDetected = true
          predictedItem = labels.labels[detectedIndex]
        }
      }
    }

    if (itemDetected && predictedItem) {
      console.log("EXECUTING ITEMS DETECTED", itemDetected)
      addToCart(predictedItem)
      itemDetected = false
      predictedItem = null
    }

    setTimeout(() => predictionFunction(), 300)
  }

  return (
    <Container>
      <Row >
        <Col md={8}>
          <WebcamCapture webcamRef={webcamRef} predictionFunction={predictionFunction} modelStart = {modelStart}/>
        </Col>
        <Col md={4}>
          <Row>

            <div className="scrollable-div">
              <Row xs={1} md={2} className="g-2 ">
                {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
                {
                  cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <CardComp key={index} {...item} />
                    ))
                  ) : (
                    <div>
                      <h5>Scan to add items to cart!</h5>
                    </div>
                  )
                }
              </Row>
              <Row style={{ justifyContent: 'center' }}>
                {cartItems.length > 0 &&
                  <Button onClick={() => navigate("/checkout")} variant="success" className='mt-3' style={{ width: "55%" }}>Proceed to checkout</Button>}
              </Row>
            </div>
          </Row>
        </Col>
      </Row>

    </Container>
  );
}

export default GridComp;