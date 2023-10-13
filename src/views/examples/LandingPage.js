import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import video1 from '../../assets/video/video1.mp4'
import video2 from '../../assets/video/video2.mp4'
import video3 from '../../assets/video/video3.mp4'

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section section-dark text-center">
            <Container>
              <h2 className="title">The Artist</h2>
              <Row>
                <Col xs='12'>
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                        <img
                          alt="..."
                          src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                        />
                    </div>
                    <CardBody>
                        <div className="author">
                          <CardTitle tag="h4">Henry Ford</CardTitle>
                          <h6 className="card-category">Freelance Videographer</h6>
                        </div>
                      <p className="card-description text-center" style={{maxWidth: '30rem', marginLeft: 'auto', marginRight: 'auto'}}>
                        My passion is providing amazing visual effects that are captivating and mind blowing. Book me today for your event.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            <Container pt='0' pb='0'>
          <Row>
            <Col md='6' lg='4'>
              <video width="100%" height="300" controls>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col md='6' lg='4'>
              <video width="100%" height="300" controls>
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col md='6' lg='4'>
              <video width="100%" height="300" controls>
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
          </Container>
        </div>
        <div className="section section-dark landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Lets Work Together</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
