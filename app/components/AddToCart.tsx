'use client';
import React from 'react';

const AddToCart = () => {
  return (
    <div>
      <button
        className='btn btn-primary rounded-xl'
        onClick={() => console.log('Click')}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
