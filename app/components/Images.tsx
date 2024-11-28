import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        
        <Col xs={{span:3 ,offset:3}} md={{span:3, offset:3}}>
          <Image src='img/Aboutme2.jpg' roundedCircle />
        </Col>
        <Col xs={{span:3 ,offset:3}} md={{span:3, offset:3}}>
          <li>
          成田健太郎
          </li>
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;