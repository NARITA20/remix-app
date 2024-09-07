import Carousel from 'react-bootstrap/Carousel';


type Props = {
  img1 : string,
  img2 : string,
  img3 : string,
}

const Caro = (props: Props) => {
  const {img1,img2,img3} = props
  return (
    <Carousel>
      <Carousel.Item>
      <img src={img1} className="App-logo" alt="logo" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} className="App-logo" alt="logo" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} className="App-logo" alt="logo" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caro;