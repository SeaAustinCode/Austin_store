import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { CartState } from '../context/context';
import Rating from './Rating';

const Filter = () => {

    const { productState: { byStock, byNextDayDelivery, sort, byRating, searchQuery },
        productDispatch } = CartState();

    console.log(byStock, byNextDayDelivery, sort, byRating, searchQuery);
    
    return (
        <div className='filter'>
            <span className='title'>Filter products</span>
            <span>
                <Form.Check inline label="Sort by price: lowest to highest" name="group1" type="radio" id={'inline-1'}
                onChange={() => productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "lowToHigh",
                })}
                checked={sort === "lowToHigh" ? true: false}/>
            </span>
            <span>
                <Form.Check inline label="Sort by price: highest to lowest" name="group2" type="radio" id={'inline-2'}
                onChange={() => productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "highToLow",
                })}
                checked={sort === "highToLow" ? true: false}/>
            </span>
            <span>
                <Form.Check inline label="Show out of stock products" name="group1" type="checkbox" id={'inline-3'}
                onChange={() => productDispatch({
                    type: "FILTER_BY_STOCK",
                })}
                checked={byStock}/>
            </span>
            <span>
                <Form.Check inline label="Show next day delivery products only" name="group1" type="checkbox" id={'inline-4'}
                onChange={() => productDispatch({
                    type: "FILTER_BY_DELIVERY",
                })}
                checked={byNextDayDelivery}/>
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating rating={byRating} onClick={(i) => productDispatch({
                    type: "FILTER_BY_RATING",
                    payload: i + 1,
                })} style={{ cursor: "pointer" }} />
            </span>
            <Button variant="light" onClick={() => productDispatch({
                type: "CLEAR_FILTERS",
            })}>
            Clear Filters </Button>

        </div>
    )
}

export default Filter