import { Container, Nav, Navbar } from "react-bootstrap";
import { AiFillLinkedin, AiFillInstagram, AiTwotoneMail } from "react-icons/ai";

export const NavbarHeader = () => {
  return (
    <Navbar sticky="top" className="site-nav">
      <Container>
        <Navbar.Brand href="/" className="site-nav-brand">
          Koldakov
        </Navbar.Brand>
        <Nav className="ms-auto site-nav-icons">
          <Nav.Item>
            <Nav.Link
              href="https://linkedin.com/in/aiv/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin size={22} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://instagram.com/ikoldakov"
              target="_blank"
              aria-label="Instagram"
            >
              <AiFillInstagram size={22} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="mailto:ivan@koldakov.com?Subject=[koldakov]-koldakov"
              aria-label="Email"
            >
              <AiTwotoneMail size={22} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};
