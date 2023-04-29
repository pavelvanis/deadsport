import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import logo from "../../public/deadsport.svg";
import githubDark from "../assets/github-dark.svg";
import school from "../assets/school.svg";

export default function Footer() {
  return (
    <footer className="bg-light">
      <Navbar bg="light" variant="light" className="p-4">
        <Container className="d-flex align-items-start justify-content-sm-between justify-content-center flex-row flex-wrap">
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
          <Navbar.Text className="p-0">
            <Container className="d-flex flex-sm-row flex-column flex-wrap justify-content-between">
              <div className="py-2 px-3 d-flex">
                <ul className="ps-2 m-0">
                  <Item
                    img={githubDark}
                    link="https://github.com/pavelvanis/deadsport"
                  >
                    Github
                  </Item>
                </ul>
              </div>
              <div className="py-2 px-3 col">
                <ul className="ps-2 m-0">
                  <Item img={school} link="https://www.spsejecna.cz">
                    School
                  </Item>
                </ul>
              </div>
            </Container>
          </Navbar.Text>
        </Container>
      </Navbar>
      <Container className="text-center">
        <p className="m-0 py-4 border-top fw-light">2023 © Pavel Vaniš</p>
      </Container>
    </footer>
  );
}

function Item({ img, link, children }) {
  return (
    <li className="list-group-item mb-2">
      <Nav.Link href={link} target="_blank" className="">
        {img ? (
          <img
            alt=""
            src={img}
            width="24"
            height="24"
            className="d-inline-block align-top me-2"
          />
        ) : null}
        <span className="">{children}</span>
      </Nav.Link>
    </li>
  );
}
