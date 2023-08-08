import React, { Component, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocation } from 'react-router-dom';



const Navigation = () => {

    const [expanded, setExpanded] = useState(false);
    const [key, setKey] = useState();
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/") {
        setKey("home")
      } else if (location.pathname === "/wedding-party") {
        setKey("wedding-party")
      } else if (location.pathname === "/accommodations") {
        setKey("accommodations")
      } else if (location.pathname === "/schedule") {
        setKey("schedule")
      } else if (location.pathname === "/rsvp") {
        setKey("rsvp")
      } else if (location.pathname === "/photos") {
        setKey("photos")
      } else if (location.pathname === "/registry") {
        setKey("registry")
      } else if (location.pathname === "/our-omaha-favorites") {
        setKey("our-omaha-favorites")
      }
    },[location])

    return (
        <>
        {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
          <div className="navigation-container">
          <Navbar expanded={expanded} expand="sm" className="mb-3 navbar-custom" >
            <Container fluid>
              {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
              <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls={`offcanvasNavbar-expand-md`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-sm`}
                aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                placement="end"
                
              >
                <Offcanvas.Header closeButton onClick={() => setExpanded(false)}>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {/* <Nav className="justify-content-end flex-grow-1 pe-3"> */}
                  <Nav variant="tabs" className="justify-content-center" activeKey={key}>
                    {/* <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link> */}
                    <Nav.Item>
                      <Nav.Link eventKey="home" as={Link} to="/" onClick={() => setExpanded(false)}>
                      Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="wedding-party" as={Link} to="/wedding-party" onClick={() => setExpanded(false)}>
                      Wedding Party
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="accommodations" as={Link} to="/accommodations" onClick={() => setExpanded(false)}>
                      Accommodations
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="schedule" as={Link} to="/schedule" onClick={() => setExpanded(false)}>
                      Schedule
                      </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="rsvp" as={Link} to="/rsvp" onClick={() => setExpanded(false)}>
                      RSVP
                      </Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="photos" as={Link} to="/photos" onClick={() => setExpanded(false)}>
                      Photos
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="registry" as={Link} to="/registry" onClick={() => setExpanded(false)}>
                      Registry
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="our-omaha-favorites" as={Link} to="/our-omaha-favorites" onClick={() => setExpanded(false)}>
                      Our Omaha Favorites
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          </div>
        {/* ))} */}
      </>
    )
}

export default Navigation