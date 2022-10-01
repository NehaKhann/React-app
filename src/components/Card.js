import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./WebCam.css";
import { Button } from 'react-bootstrap';

function CardComp() {
  return (


    <div className="scrollable-div mt-3">
    <Row xs={1} md={2} className="g-2 ">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
            <Card.Body>
              <Card.Title>Cart Item</Card.Title>
              <Card.Text>
               This is xyz product
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <Button variant="success" className='mt-3'>Checkout</Button>
    <Button variant="success" className='mt-3'>Checkout</Button>
    </div>

  );
}

export default CardComp;