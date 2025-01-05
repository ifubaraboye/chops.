import React from 'react'
// import Products from './Products'

const ProductCard = ({product}) => {
  return (
    <div className='grid items-center'>
        <div>
            <img className='' src={product.image} alt="" width={200} />
        </div>
        <div>
        <p className='block'>{product.title}</p>
        <p>{product.description}</p>
        <p className='block'>{product.price}</p>
        </div>
        
    </div>
  )
}

export default ProductCard