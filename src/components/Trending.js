import { Card, Row, Container, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>

        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="text-white bg-dark movieImage">
              <Image src={duneImage} alt="Dune Movie" />
              <Card.Title className="text-center ">Dune</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark movieImage">
              <Image src={everythingImage} alt="Dune Movie" className="images" />
              <Card.Title className="text-center ">Everything</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark movieImage">
              <Image src={infiniteImage} alt="Dune Movie" className="images" />
              <Card.Title className="text-center ">Infinite</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark movieImage">
              <Image src={jokerImage} alt="Dune Movie" className="images" />
              <Card.Title className="text-center ">Joker</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark movieImage">
              <Image src={lightyearImage} alt="Dune Movie" className="images" />
              <Card.Title className="text-center ">Lightyear</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark movieImage">
              <Image src={morbiusImage} alt="Dune Movie" className="images" />
              <Card.Title className="text-center ">Morbius</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
