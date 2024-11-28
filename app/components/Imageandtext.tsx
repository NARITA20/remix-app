import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Images from "~/components/Images";


function ShapeExample() {
  return (
    <Container>
      <Row>
      <Col xs={{span:2 ,offset:7}} md={{span:2, offset:2}}>
          <Images/>
        </Col>
          <Col xs={{span:2 ,offset:7}} md={{span:2, offset:2}}>
        <Images/>
        </Col>
        成田健太郎
      </Row>
    </Container>
  );
}

export default ShapeExample;