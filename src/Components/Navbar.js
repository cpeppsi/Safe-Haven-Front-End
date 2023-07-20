import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavigationBar() {
  return (
    <Navbar style={{display:'inline-block'}} data-bs-theme="light">
      <Container>
        <Navbar.Brand href='/'>Safe-Haven</Navbar.Brand>
        <Nav.Link href='/'>Home</Nav.Link>
        |
        <Nav.Link href='/new'>New</Nav.Link>
      </Container>
    </Navbar>
  )
}

export default NavigationBar