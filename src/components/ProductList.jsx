import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({Products, category}) => {
    const productCategory = Products.filter((Product) => Product.category === category) 

  return (
    <div>
        {productCategory.length > 0 ? (
        productCategory.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  )
}

export default ProductList