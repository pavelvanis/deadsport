import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import logo from "../../public/deadsport.svg";

export default function Header() {
  return (
    <header>
      <Navbar bg="light" expand="md" className="px-5 py-4">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />{" "}
            DEADSPORT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Deadsport
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="#action1" className="text-uppercase">
                  Results
                </Nav.Link>
                <Nav.Link href="#action2" className="text-uppercase">
                  News
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
