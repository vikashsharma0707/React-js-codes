
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header=()=>{
    return(
        <>
           <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="display">Display
            <Nav.Link as={Link} to="address">address</Nav.Link>
            <Nav.Link as={Link} to="number">Number</Nav.Link>  
            </Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Header;