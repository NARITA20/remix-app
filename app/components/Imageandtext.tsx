import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Images from "~/components/Images";


function ShapeExample() {
  return (
    <Container>
      <Row>
      <div style={{display: "flex",justifyContent: "center", alignItems: "center"}}>        
        <Col>
        <Images/>
        </Col>
        <Col>
        成田健太郎
        </Col>
        </div>
      </Row>
    </Container>
  );
}

export default ShapeExample;