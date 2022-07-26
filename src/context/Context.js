import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducers';

const Cart = createContext();
faker.seed(100); // this will make it so that the data won't change every time it is called refreshed etc. Pictures will still change

const Context = ({ children }) => {

    const stockArray = [3, 5, 6, 0, 2, 10]
    const ratingsArray = [1, 2, 3, 4, 5]

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        // inStock: faker.random.arrayElemenmt(stockArray),
        inStock: faker.helpers.arrayElement([3, 5, 6, 0, 2]),
        nextDayDelivery: faker.datatype.boolean(),
        // ratings: faker.random.alphaNumeric([1, 2, 3, 4, 5]),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]) 
    }));

    console.log(products);

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byNextDayDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    return <Cart.Provider value={{state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>
}

export default Context

export const CartState = () => {
    return useContext(Cart);
}