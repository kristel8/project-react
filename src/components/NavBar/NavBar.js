/* eslint-disable react/jsx-no-undef */

import { CartWidget } from "../CartWidget/CartWidget"
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"

export const NavbarContainer = (  ) => {
  return (
  <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">MeGame</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Nosotros</Nav.Link>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Acción</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Aventura</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Terror</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Todos</NavDropdown.Item>
        </NavDropdown>
        <CartWidget icono="bi bi-cart"/>
        <CartWidget icono="bi bi-person"/>
      </Nav>
    </Navbar>
  </Container>
</Navbar>
  )
}