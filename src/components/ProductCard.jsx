import React from 'react'
// import Products from './Products'

const ProductCard = ({product}) => {
  return (
    <div className='grid items-center p-3 border-[3px] hover:border-[#E63946]'>
        <div>
            <img className='' src={product.image} alt="" width={200} />
        </div>
        <div>
          <p className='font-semibold'>{product.title}</p>
          {/* <p>{product.contents}</p> */}
          <p className='py-2 font-medium'>₦{product.price}</p>
          <button className='border-none py-2 mb-2 w-[120px] bg-[#E63946] text-white font-semibold'>Preview</button>
        </div>
        
    </div>
  )
}

export default ProductCard