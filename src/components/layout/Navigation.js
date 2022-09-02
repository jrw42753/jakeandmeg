import React, { Component, useState } from 'react';
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <>
          <Nav variant="tabs" className="justify-content-center" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                Link
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">
                Link
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </>
    )
}

export default Navigation