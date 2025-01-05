import React from 'react'
// import Products from './Products'

const ProductCard = ({product}) => {
  return (
    <div>
        <img src={product.image} alt="" />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
    </div>
  )
}

export default ProductCard