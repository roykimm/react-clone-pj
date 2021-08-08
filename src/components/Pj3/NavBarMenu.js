import React from 'react'
import { Nav , Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBarMenu = (props) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Product</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="show-products-nav" to={props.rootURL + "/"}>Products</NavLink>
                    <NavLink className="add-products-nav" to={props.rootURL + "/addProduct/"}>Add Products</NavLink>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBarMenu
