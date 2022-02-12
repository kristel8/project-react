/* eslint-disable react/jsx-no-undef */

import { CartWidget } from "../CartWidget/CartWidget"
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

export const NavbarContainer = (  ) => {
  return (
  <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
  <Link to="/" className="navbar-brand">Booki</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar id="basic-navbar-nav">
      <Nav className="me-auto">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/nosotros" className="nav-link">Nosotros</Link>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          <Link to="/accion" className="dropdown-item">Fantasia</Link>
          <Link to="/aventura" className="dropdown-item">Romance</Link>
          <Link to="/terror" className="dropdown-item">Suspenso</Link>
        </NavDropdown>
        <CartWidget icono="bi bi-cart"/>
        <CartWidget icono="bi bi-person"/>
      </Nav>
    </Navbar>
  </Container>
</Navbar>


  )
}