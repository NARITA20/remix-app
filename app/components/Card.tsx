import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


type Props = {
    img1 : string
}
const BasicExample = (props: Props) => {
  const {img1} = props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;