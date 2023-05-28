import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";
const footer = () => {
  return (
    <Container color="blue" className="font-small pt-4 mt-4 border-top">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title">Arslan.Ecommerce</h5>
            <p>For the best products and service.</p>
          </Col>
          <Col md="6">
            <h5 className="title">Contact.</h5>
            <ul className="pad">
              <li className="list-unstyled">
                <Link to="#!">+92-3474452225 📞 </Link> 
              </li>
              <li className="list-unstyled">
                <Link to="#!">
                  +91-3474452225{" "}
                  <img
                    src="https://img.icons8.com/office/16/000000/whatsapp--v1.png"
                    alt="whatsapp"
                  />
                </Link>
              </li>
              <li className="list-unstyled">
                <Link to = "mailto:arslanahmad7822@gmail.com">
                  arslanahmad7822@gmail.com 📧
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link>
            {" "}
            Arslan.Ecommerce made with ❤️ by
            <Link to="https://pratiktiwari-84f71.web.app/">Arslan</Link>
          </Link>
        </Container>
      </div>
    </Container>
  );
};

export default footer;
