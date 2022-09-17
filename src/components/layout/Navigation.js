import React, { Component, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';



const Navigation = () => {

    const [expanded, setExpanded] = useState(false);
    return (
        // <div className="navigation-container">
        //   <Navbar expand="sm">
        //     <Container>
        //       <Nav variant="tabs" className="justify-content-center" defaultActiveKey="link-1">
        //       <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
        //       <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav.Item>
        //           <Nav.Link eventKey="link-1" as={Link} to="/">
        //             Home
        //           </Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //           <Nav.Link eventKey="link-2" as={Link} to="/wedding-party">
        //             Wedding Party
        //           </Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //           <Nav.Link eventKey="link-3" as={Link} to="/">
        //             Link
        //           </Nav.Link>
        //         </Nav.Item>
        //       </Navbar.Collapse>
        //       </Nav>
        //     </Container>
        //   </Navbar>
        // </div>
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
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {/* <Nav className="justify-content-end flex-grow-1 pe-3"> */}
                  <Nav variant="tabs" className="justify-content-center" defaultActiveKey="link-1">
                    {/* <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link> */}
                    <Nav.Item>
                      <Nav.Link eventKey="link-1" as={Link} to="/" onClick={() => setExpanded(false)}>
                      Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-2" as={Link} to="/wedding-party" onClick={() => setExpanded(false)}>
                      Wedding Party
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-3" as={Link} to="/" onClick={() => setExpanded(false)}>
                      Transportation
                      </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="link-4" as={Link} to="/" onClick={() => setExpanded(false)}>
                      Things to Do
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-5" as={Link} to="/" onClick={() => setExpanded(false)}>
                      Our Story
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-6" as={Link} to="/" onClick={() => setExpanded(false)}>
                      Photos
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-7" as={Link} to="/" onClick={() => setExpanded(false)}>
                      Registry
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-8" as={Link} to="/" onClick={() => setExpanded(false)}>
                      RSVP
                      </Nav.Link>
                    </Nav.Item> */}
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