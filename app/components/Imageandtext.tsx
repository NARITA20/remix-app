import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Images from "~/components/Images";


function ShapeExample() {
  return (
    <Container>
      <Row>
      <div style={{display: "flex",justifyContent: "center"}}> 
        <div style={{ alignItems: "right"}}>       
        <Col>
        <Images/>
        </Col>
        </div>

        


               
        <Col>
        <li>
        <div style={{ alignItems: "left"}} className="text-4xl">
        成田健太郎
        </div>
        </li>
        </Col>
        
        <p style={{ textAlign: "center" }}>
        
       </p>

       
        
        </div>
        
      </Row>
    </Container>
  );
}

export default ShapeExample;