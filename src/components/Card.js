import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./WebCam.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function CardComp({ name, price, unit, productId, image }) {
  const navigate = useNavigate();
  return (
    // <div className="scrollable-div mt-3">
    //   <Row xs={1} md={2} className="g-2 ">
    //     {Array.from({ length: 6 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} height = {200} width= {170}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Price: {price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    //   ))}
    // </Row>
    // <Button onClick={() => navigate("/checkout")} variant="success" className='mt-3'>Proceed to checkout</Button>
    // </div>
  );
}

export default CardComp;