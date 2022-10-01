import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WebcamCapture from "./WebCam"
import CardComp from "./Card"

function GridComp() {
  return (
    <Container >
      <Row>

        <Col lg={7}><WebcamCapture /> </Col>

        {/* <Col  sm={9}></Col> */}
        <Col  lg={5}>
  
          <CardComp/></Col>
      </Row>

    </Container>
  );
}

export default GridComp;