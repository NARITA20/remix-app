import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Images from "~/components/Images";


function ShapeExample() {
  return (
    <Container>
      <Row>
      <div style={{display: "flex",justifyContent: "center", alignItems: "right"}}>        
        <Col>
        <Images/>
        </Col>
        </div>
        


        <div style={{display: "flex",justifyContent: "center", alignItems: "left"}}>        

        <Col>
        <li>
          <h2>
        成田健太郎
        </h2>
        </li>
        <p style={{ textAlign: "center" }}>
        
       </p>

       
        </Col>
        </div>
        
      </Row>
    </Container>
  );
}

export default ShapeExample;