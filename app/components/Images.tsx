import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
      <Col xs={2}md={2} >
        </Col>
        <Col xs={3}md={3} >
          <Image src='img/Aboutme2.jpg' roundedCircle />
        </Col>
        <Col xs={3} md={3}>
        <p></p>
        <div className="text-3xl">
          ・成田 健太郎
        </div>
        <p></p>
        <p style={{ textAlign: "center" }}>
            情報科学専攻選考
        </p>
        <p style={{ textAlign: "center" }}>
            自然言語処理に関する研究室所属
        </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;