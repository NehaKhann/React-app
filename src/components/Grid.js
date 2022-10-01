import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WebcamCapture from "./WebCam"
import CardComp from "./Card";


function GridComp() {
  return (
    <Container >
      <Row>

        <Col md={7}><WebcamCapture /> </Col>
        <Col md={5}>
          <CardComp />
       
          </Col>
      </Row>

    </Container>
  );
}

export default GridComp;