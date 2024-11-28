import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        
        {/* <Col xs={{span:2 ,offset:7}} md={{span:2, offset:2}}> */}
          <Image src='img/Aboutme2.jpg' roundedCircle />
        {/* </Col> */}
      </Row>
    </Container>
  );
}

export default ShapeExample;