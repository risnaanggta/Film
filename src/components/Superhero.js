import { Card, Row, Container, Col, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermenImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermenImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>

        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="text-white bg-dark movieImage">
              <Image src={antmanImage} alt="Dune Movie" />
              <Card.Title className="text-center ">Antman</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark movieImage">
              <Image src={avengerImage} alt="Dune Movie" className="images" />
              <Card.Title className="text-center ">Avenger</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark movieImage">
              <Image src={batmanImage} alt="Dune Movie" className="images" />
              <Card.Title className="text-center ">Batman</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark movieImage">
              <Image src={robinhoodImage} alt="Dune Movie" className="images" />
              <Card.Title className="text-center ">Robinhood</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark movieImage">
              <Image src={spidermenImage} alt="Dune Movie" className="images" />
              <Card.Title className="text-center ">Spiderman</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white bg-dark movieImage">
              <Image src={supermenImage} alt="Dune Movie" className="images" />
              <Card.Title className="text-center ">Supermen</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
