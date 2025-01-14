import React from 'react'
import Modal from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import { useState } from 'react';
import { useCart } from './CartContext';
import { Alert } from 'react-bootstrap';

const ProductCard = ({product}) => {
  const [showModal, setShowModal] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const {addToCart} = useCart()
  const [show, setShow] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)


  const handleAddToCart = () => {
    addToCart(product, quantity);
    // alert(`${quantity} of ${product.title} added to cart!`);
    setShow(true)
    setTimeout( () => {
      setShow(false);
    }, 1000)
  }

  return (
    <div className='grid items-center p-3 border-[3px] hover:border-[#E63946]'>
        <div>
            <img className='flex mx-[70px] lg:mx-0' src={product.image} alt="" width={200} />
        </div>
        <div>
          <p className='font-semibold'>{product.title}</p>
          {/* <p>{product.contents}</p> */}
          <p className='py-2 font-medium'>₦{product.price}</p>
          <button id='buynow' className='border-none py-2 mb-2 w-[120px] bg-[#E63946] text-white font-semibold' onClick={handleShow}>Preview</button>
        </div>
        
        <div className=''>
          <Modal show={showModal} onHide={handleClose} className='border lg:w-[450px] w-[300px] rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white py-5'>
          <Modal.Header closeButton className='pl-8'>
            <Modal.Title className='text-[50px]'>{product.title}</Modal.Title>
            <Modal.Title className='text-[20px]'>Contents</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ whiteSpace: 'pre-line' }} className='pl-8 py-5'>
            {product.contents}
              <div>
                <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
                <input
                  type="number"
                  id={`quantity-${product.id}`}
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="ml-2 border p-1 w-[60px] text-center"
                />
            </div>
          </Modal.Body>

          <Modal.Footer className='flex justify-center gap-x-10'>
            <Button variant="secondary" onClick={handleClose} className='border p-3 rounded-md font-semibold '>Close</Button>
            <Button variant="primary" className='border p-3 rounded-md font-semibold bg-[#E63946] text-white outline-none' onClick={handleAddToCart}>Add To Cart</Button>
          </Modal.Footer>
        </Modal>
        </div>
      
        <div className='fixed top-5 right-5 z-50'> {/* Fixed positioning for alert */}
        <Alert 
          show={show} 
          variant="success" 
          onClose={() => setShow(false)} 
          dismissible
          className='border pb-4 px-3 rounded-lg bg-white shadow-md '
        >
          <Alert.Heading> Item Added to Cart!</Alert.Heading>
          {/* <p>{quantity} of {product.title} added to cart successfully!</p> */}
        </Alert>
      </div>
    </div>
  )
}

export default ProductCard