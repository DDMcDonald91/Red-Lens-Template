/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState, useEffect} from "react";

import video1 from '../../assets/video/video1.mp4'
import video2 from '../../assets/video/video2.mp4'
import video3 from '../../assets/video/video3.mp4'


// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Jane Faker <br />
              </h4>
              <h6 className="description">Freelance Videographer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                An artist of considerable range, Jane Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
              </p>
              <br />
              <Button className="btn-round" color="default" outline onClick={toggle}>
                <i className="fa fa-cog" /> Add New Project
              </Button>
            </Col>
          </Row>
          <br />
          <Container pt='0' pb='0'>
          <h4 align='center'>My Projects</h4>
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
        </Container>
      </div>
      <DemoFooter />

      <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add A New Project</ModalHeader>
        <ModalBody>
          <Card className="ml-auto mr-auto" style={{background: 'none'}}>
            <CardBody>
                <Form className="register-form">
                  <FormGroup mt='1' mb='1'>
                  <label>Title</label>
                  <Input placeholder="enter your video title" type="text" />
                  </FormGroup>
                  <FormGroup mt='1' mb='1'>
                  <label>Description</label>
                  <Input placeholder="add your video description" type="textarea" height={300} />
                  </FormGroup>
                  <FormGroup mt='1' mb='1'>
                  <label>Thumbnail Upload</label>
                  <Input placeholder="Thumbnail" type="file" />
                  </FormGroup>
                  <FormGroup mt='1' mb='1'>
                  <label>Video Upload</label>
                  <Input placeholder="Video" type="file" />
                  </FormGroup>
                  <Button block className="btn-round" color="secondary">
                    Submit
                  </Button>
                </Form>
                </CardBody>
              </Card>
        </ModalBody>
      </Modal>
      </div>
      
    </>
  );
}

export default ProfilePage;
