import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({Products, category}) => {
    const productCategory = Products.filter((Product) => Product.category === category) 

  return (
    <div className='lg:flex justify-center text-center gap-x-5 px-5 grid lg:px-0 gap-y-10'>
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