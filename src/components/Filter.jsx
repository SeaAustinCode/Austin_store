import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Rating from './Rating';

const Filter = () => {

    const [rate, setRate] = useState(3)
    
    return (
        <div className='filter'>
            <span className='title'>Filter products</span>
            <span>
                <Form.Check inline label="Ascending" name="group1" type="radio" id={'inline-1'} />
            </span>
            <span>
                <Form.Check inline label="Descending" name="group2" type="radio" id={'inline-2'} />
            </span>
            <span>
                <Form.Check inline label="Show out of stock products" name="group1" type="checkbox" id={'inline-3'} />
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating rating={rate} onClick={(i) => setRate(i + 1)} style={{ cursor: "pointer" }} />
            </span>
            <Button variant="light">Clear Filters </Button>

        </div>
    )
}

export default Filter