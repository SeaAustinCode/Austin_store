import React from 'react';
import { Card, Button } from "react-bootstrap";
import { CartState } from '../context/context';
import Rating from './Rating';

const SingleProduct = ({ prod }) => {

  const {
    state: { cart },
    dispatch, // used to manipulate the state
  } = CartState();

  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Next Day Delivery</div>
            ) : (
              <div>Standard Shipping</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {
            cart.some(p => p.id === prod.id) ? ( //some() checks to see if that particular thing exists inside the array(cart) or not 
              <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod
                });
              }} 
              variant="danger" style={{ marginRight: 50 }}>Remove from Cart</Button> //if it is exists in the cart only show remove from cart
            ) : (
              <Button onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod
                });
              }}
                disabled={!prod.inStock}>
                {!prod.inStock ? "Out of Stock" : "Add to Cart"}</Button> //if it doesnt exist in the cart only show add to cart
            )
          }
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct