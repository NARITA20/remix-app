import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Images from "~/components/Images";


function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Images/>
        </Col>
        <Col xs={6} md={4}>
        <Images/>
        </Col>
        <Col xs={6} md={4}>
        <Images/>
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;