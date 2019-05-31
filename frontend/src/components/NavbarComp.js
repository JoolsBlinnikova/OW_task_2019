import React, {Component} from 'react'
import {Nav, Navbar} from "react-bootstrap";

class NavbarComp extends Component {
    render() {
        return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Openway</Navbar.Brand>
                    <Navbar.Brand href="/appliers">Заполнить анкету</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default NavbarComp;

