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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer style={{background: '#0b1011', color: 'white'}} bg='dark' className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                  Red Lens
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © 2023, created by DDM Web Designs.
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
