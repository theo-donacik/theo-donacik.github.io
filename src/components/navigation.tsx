import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function topBar(){
  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Theo Donacik</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default topBar;