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
  const [totalPrice, setTotalPrice] = useState(0)

  const addToCart = (item) => {
    console.log("ITEM AFFSD", item)
    setTotalPrice(prevValue => prevValue + item.price)
    setCartItems((prevItems) => {
      let prod = prevItems.find(product => product.productId == item.productId)
      console.log("PREVIOUS ITEMS", prevItems)
      if (prod) {
        let qty = prod.unit + 1
        console.log("FIND PRODUCT QUANTITY", qty, prod.unit)
        prod.unit = qty
        let filter = prevItems.filter(p => p.productId != item.productId)
        return [prod, ...filter]
      }
      return [...prevItems, item]
    })
  }

  async function predictionFunction() {
    //testing azure vision api
    let model = new cvstfjs.ObjectDetectionModel();
    await model.loadModelAsync("model.json");
    console.log(model.toString())
    setModelStart(true)

    const predict = async () => {
      console.log("RUNNING PREDICTION")
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

      setTimeout(() => predict(), 200)
      return
    }
    predict()
  }

  return (
    <Container>
      <Row >
        <Col md={8}>
          <WebcamCapture webcamRef={webcamRef} predictionFunction={predictionFunction} modelStart={modelStart} />
        </Col>
        <Col md={4}>
          <Row style={{ marginTop: 18, height: '87%' }}>
            <div className="scrollable-div" style={{ flex: 1 }}>
              <p>Total Number of Items: <strong>{cartItems.length}</strong></p>
              <p>Total Price: <strong>{totalPrice}</strong></p>
              <Row xs={1} md={2} className="g-2 ">
                {
                  cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <CardComp key={index} {...item} />
                    ))
                  ) : (
                    <div style={{ alignItems: 'center', margin: 'auto' }}>
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