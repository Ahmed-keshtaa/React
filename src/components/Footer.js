import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/3.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ahmed-mohamed-keshtaa-080436270/" target="_blanck"><img src={navIcon1} alt="Icon" /></a>
              <a href="#" target="_blanck"><img src={navIcon2} alt="Icon" /></a>
              <a href="#" target="_blanck"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>&copy; Copyright 2023. All Rights Reserved by Ahmed_Keshtaa</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
