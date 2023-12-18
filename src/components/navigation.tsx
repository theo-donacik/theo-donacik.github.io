import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';

function topBar(){
  return(
    <Navbar bg="light" expand="sm" className="navbar-expand">
      <Container fluid>
        <Navbar.Brand href="/">Theo Donacik</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
        <NavbarBrand 
          href="https://www.linkedin.com/in/theo-donacik/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin width="25" height="25"/>
        </NavbarBrand>
        <NavbarBrand 
          href="https://github.com/theo-donacik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github width="25" height="25"/>
        </NavbarBrand>
        <NavbarBrand 
          href="mailto:donacik.t@northeastern.com"
        >
          <Envelope width="25" height="25"/>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
}
export default topBar;