import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
      <Col xs={3}md={3} >
        </Col>
        <Col xs={3}md={3} >
          <Image src='img/Aboutme2.jpg' roundedCircle />
        </Col>
        <Col xs={3} md={3}>
        <div>  </div>
        <div className="text-3xl">
          ・成田 健太郎
        </div>
        <p style={{ textAlign: "center" }}>
            法政大学情報学部3年
        </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;