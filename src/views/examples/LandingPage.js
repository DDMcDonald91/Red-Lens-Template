import React, { useState } from "react";

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
  Alert,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import video1 from '../../assets/video/video1.mp4'
import video2 from '../../assets/video/video2.mp4'
import video3 from '../../assets/video/video3.mp4'

function LandingPage() {
  // template code
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  // state
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [formMessage, setFormMessage] = useState('')



  // handle submission form 
  const handleSubmit = (e) => {
    e.preventDefault();

    // secondary validation
    if(!name, !email, !formMessage){
      setMessage("Missing form inputs. Please check everyting.")
      return
    }

    setLoading(true)

    // demo code
    setMessage('Sumission successful! We will be in touch soon!')

    setLoading(false)

    handleReset()
  }

  const handleReset = () =>{
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }


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
                          <CardTitle tag="h4">Jake Faker</CardTitle>
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
        </div>
        <div className="section section-dark text-center">
        <Container>
            <h2 className="text-center title">Recent Projects</h2>
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
        <div className="section section-dark landing-section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center title">Lets Work Together</h2>
                <Form className="contact-form" onSubmit={handleSubmit}>
                  {message && (<Alert>{message}</Alert>)}
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
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
                        <Input placeholder="Email" type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    value={formMessage} 
                    onChange={(e) => {setFormMessage(e.target.value)}}
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg" type='submit' disabled={loading}>
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
