import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

import "./css/NavBar.css";


export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <NavLink className="linkHome" to="/">Home</NavLink>
          </Navbar.Brand>
          <Nav className="links">
            <NavLink className="link" to="category/auriculares">Auriculares</NavLink>
            <NavLink className="link" to="category/parlantes">Parlantes</NavLink>
            <NavLink className="link" to="category/accesorios">Accesorios</NavLink>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
