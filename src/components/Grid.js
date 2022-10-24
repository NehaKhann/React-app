import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WebcamCapture from "./WebCam"
import CardComp from "./Card";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function GridComp() {
  const navigate = useNavigate();

  return (
    <Container>
      <Row >
        <Col md={8}>
          <WebcamCapture />
        </Col>
        <Col md={4}>
          <Row>

            <div className="scrollable-div">
              <Row xs={1} md={2} className="g-2 ">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <CardComp />
                ))}
                <Button onClick={() => navigate("/checkout")} variant="success" className='mt-3'>Proceed to checkout</Button>
              </Row>
            </div>
          </Row>
        </Col>
      </Row>

    </Container>
  );
}

export default GridComp;