import { Container, Row, Col } from "react-bootstrap";
import logobig from "../assets/img/logobig.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.png';
import navIcon3 from '../assets/img/mail.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logobig} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/donghwui/" target="_blank" rel="noreferrer"> <img src ={navIcon1} alt="Icon" /></a>
            <a href="https://github.com/Donghwui" target="_blank" rel="noreferrer"> <img src ={navIcon2} alt="Icon" /></a>
            <a href="mailto:donghwuikim0102@gmail.com" target="_blank" rel="noreferrer"><img src ={navIcon3} alt="Icon" /></a>            </div>
            <p>© 2023 Donghwui Kim™. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}