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
        <li style={{ textAlign: "center" ,color: "black" }} >

          <h3 >自然言語処理を用いた単語の連想システムの構築</h3>
          </li>
          <a style={{ textAlign: "center" ,color: "black" }}
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://drive.google.com/file/d/1iC0-2I-z5Xt9GnXy39IILfhjCXBVQ7oi/view?usp=sharing"
            rel="noreferrer"
          >
            <div style={{ textAlign: "center" }}>
            https://drive.google.com/file/d/1iC0-2I-z5Xt9GnXy39IILfhjCXBVQ7oi/view?usp=sharing
            </div> 
      </a>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} className="App-logo" alt="logo" />

        <Carousel.Caption>
          
          <a style={{ textAlign: "center" ,color: "black" }}
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="/book"
            rel="noreferrer"
          >
            <h3>・趣味  この写真はYOASOBIのライブの写真です</h3>
            
      </a>
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