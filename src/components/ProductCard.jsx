import React from 'react'

const ProductCard = ({Product}) => {
  return (
    <div>
        <img src={Product.image} alt="" />
        <p>{Product.title}</p>
        <p>{Product.description}</p>
        <p>{Product.price}</p>
    </div>
  )
}

export default ProductCard