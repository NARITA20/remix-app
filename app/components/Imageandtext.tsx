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

        


        <div style={{ alignItems: "right"}}>       

        <Col>
        <li>
          
        成田健太郎
        
        </li>
        </Col>
        </div>
        <p style={{ textAlign: "center" }}>
        
       </p>

       
        
        </div>
        
      </Row>
    </Container>
  );
}

export default ShapeExample;