import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
          <NavLink to="/">Home</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="category/auriculares">Auriculares</NavLink>
            <NavLink to="category/parlantes">Parlantes</NavLink>
            <NavLink to="category/accesorios">Accesorios</NavLink>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
