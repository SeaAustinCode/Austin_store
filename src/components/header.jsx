import React from 'react'
import { Container, Navbar, FormControl, Dropdown, Nav, FaShoppingCart, Badge } from "react-bootstrap"

const header = () => {
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <a>Shopping Cart</a>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl className="m-auto" style={{ width: 500 }} placeholder="Search for a product" />
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRigh>
                        <Dropdown.Toggle variant="success">
                            {/* <FaShoppingCart color="white" fontSize="25px" /> */}
                            <Badge>{10}</Badge>
                        </Dropdown.Toggle>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default header