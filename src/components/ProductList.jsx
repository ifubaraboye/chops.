import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({Products}) => {
  return (
    <div>
        {Products.map((Product) => (
            <ProductCard Product={Product} key={Product.id} />
        ))}
    </div>
  )
}

export default ProductList