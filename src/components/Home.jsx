import React from 'react'
import { CartState } from '../context/context'
import SingleProduct from './SingleProduct';
import Filter from './Filter';
import './styles.css';

const Home = () => {

  const { state: { products } } = CartState();

  // console.log(state);

  return (
    <div className='home'>
      <Filter />
      <div className='productContainer'>
        {products.map((prod) => {
          return <SingleProduct prod={ prod } key={ prod.id } />;
        })}
      </div>
    </div>
  );
};

export default Home