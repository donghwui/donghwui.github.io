import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.png";
import navIcon3 from "../assets/img/mail.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "aboutme" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={
                activeLink === "experiences"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("experience")}
            >
              Experience
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/donghwui/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/Donghwui"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="mailto:donghwuikim0102@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
              <button className="vvd" onClick={() =>window.open("https://drive.google.com/file/d/1uBxA76Uqji3mJooZnQTI7ZbJlWySuHiE/view?usp=sharing", '_blank')}>
                <span>Resume</span>{" "}
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
