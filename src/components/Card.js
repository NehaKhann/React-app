import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
  return (
    <>
    <h3>Cart Items</h3>
    <Row xs={1} md={2} className="g-4 pt-3">
     
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
    </>
  );
}

export default GridExample;