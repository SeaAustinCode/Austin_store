import React from 'react'
import { Container, Navbar, FormControl, Dropdown, Nav, Badge } from "react-bootstrap"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

const header = () => {
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl className="m-auto" style={{ width: 500 }} placeholder="Search for a product" />
                </Navbar.Text>
                <Nav>
                    <Dropdown alignright="true"> {/* message that comes out of the shopping cart is aligned to the right */}
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge bg='success'>{10}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding: 10 }}>Cart is Empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default header