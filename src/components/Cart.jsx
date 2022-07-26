import React, { useState, useEffect } from 'react'
import { Form, ListGroup } from 'react-bootstrap';
import { CartState } from '../context/context';
import { Button, Row, Col, Image } from 'react-bootstrap';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, current) => acc + Number(current.price) * current.qty, 0));
  }, [cart]);

  const [ checkout, setCheckout] = useState(false);


  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map(prod => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>$ {prod.price}</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control as="select" value={prod.qty}
                  onChange={(e) => dispatch({type: "CHANGE_CART_QTY", payload: { id: prod.id, qty: e.target.value}})}>
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x+1}>{x+1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button type="button" variant="light" onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: prod})}>
                    <AiFillDelete fontFamily='20px' />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filter summary">
        <span className="title"> Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        <PayPalScriptProvider options={{ "client-id": "test" }}>
          <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
        <Button type="button" disabled={cart.length === 0}
        onClick= { () => {setCheckout(true)
        }}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart