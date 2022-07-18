import React from 'react'
import { createContext } from 'react'
import { faker } from '@faker-js/faker';

const Cart = createContext();

const Context = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        inStock: faker.random.alphaNumeric([0, 3, 5, 6, 7]),
        nextDayDelivery: faker.datatype.boolean(),
        ratings: faker.random.alphaNumeric([1, 2, 3, 4, 5]),
    }));

    console.log(products);

    return (
        <Cart.Provider>
            {children}
        </Cart.Provider>
    )
}

export default Context