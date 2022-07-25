import React from 'react'
import { Container, Navbar, FormControl, Dropdown, Nav, Badge, Button } from "react-bootstrap"
import { AiFillDelete } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { CartState } from '../context/context';

const header = () => {

    const {
        state: { cart },
        dispatch, //this is used to remove item from the cart
        productDispatch
    } = CartState();

    return (
        <Navbar className="banner">
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl className="m-auto" type="search" style={{ width: 500 }} placeholder="Search for a product" 
                    onChange={(e) => {
                        productDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: e.target.value,
                        });
                    }}/>
                </Navbar.Text>
                <Nav>
                    <Dropdown alignright="true"> {/* message that comes out of the shopping cart is aligned to the right */}
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge bg='success'>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>

                            { cart.length > 0 ? (
                                <>
                                {
                                    cart.map((prod) =>(
                                        <span className="cartItem" key={prod.id}>
                                            <img src={prod.image} className="cartItemImage" alt={prod.name} />
                                            < div className="cartItemDetail">
                                                <span>{prod.name}</span>
                                                <span>$ {prod.price.split(".")[0]}</span>
                                            </div>
                                            <AiFillDelete fontSize="20px" style={{ cursor: "pointer" }}
                                            onClick={() =>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: prod,
                                            })
                                        }
                                        />
                                        </span>
                                    ))}
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>Go to Cart</Button>
                                    </Link>
                                </>
                            ) : ( <span style={{ padding: 10 }}>Cart is Empty!</span>)}
                            
                            
                            
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
        )
    }

export default header;