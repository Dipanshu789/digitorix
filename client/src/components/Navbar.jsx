import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  // This closes the navbar after a link is clicked
  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar bg="black" expand="lg" variant="dark" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          <img
            src="/digitornix.png"
            alt="Digitornix Logo"
            height="50"
            className="d-inline-block align-top"
            style={{ marginRight: "8px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(exp => !exp)} />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-animate-link text-light" onClick={handleNavClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-animate-link text-light" onClick={handleNavClick}>About</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-animate-link text-light" onClick={handleNavClick}>Services</Nav.Link>
            <Nav.Link as="a" href="/comming/index.html" className="nav-animate-link text-light" target="_self" onClick={handleNavClick}>Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-animate-link text-light" onClick={handleNavClick}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/adminlogin" className="nav-animate-link text-light" onClick={handleNavClick}>Admin Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}