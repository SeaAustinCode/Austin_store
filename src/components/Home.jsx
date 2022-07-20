import React from 'react'
import { CartState } from '../context/context'
import SingleProduct from './SingleProduct';
import Filter from './Filter';
import './styles.css';

const Home = () => {

  const { state: { products },
    productState: { sort, byStock, byNextDayDelivery, byRating, searchQuery }, } = CartState();

  // console.log(state);

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byNextDayDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.nextDayDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => 
        prod.name.toLowerCase().includes(searchQuery));
    }

    return sortedProducts;

  };

  return (
    <div className='home'>
      <Filter />
      <div className='productContainer'>
        {transformProducts().map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;