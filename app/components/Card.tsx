import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


type Props = {
    img1 : string
    text1 : string
}
const BasicExample = (props: Props) => {
  const {img1,text1} = props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Text>
          {text1}
        </Card.Text>
        {/*
        <Button variant="primary">Go somewhere</Button>
        */}
        </Card.Body>
    </Card>
  );
}

export default BasicExample;