import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Images from "~/components/Images";


function ShapeExample() {
  return (
    <Container>
      <Row>
      <div style={{display: "flex",justifyContent: "center"}}> 
        {/* <div style={{ alignItems: "right"}}>        */}
        <Col xs={{span:3,offset:3}} md={{span:3, offset:3}}>

        <Images/>
        </Col>
        {/* </div> */}

        


               
        <Col xs={{span:3,offset:3}} md={{span:3, offset:3}}>

        <li>
        {/* <div style={{ alignItems: "left"}} className="text-4xl"> */}
        成田健太郎
        {/* </div> */}
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