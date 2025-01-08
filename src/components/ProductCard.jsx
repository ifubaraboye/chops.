import React from 'react'
import Modal from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import { useState } from 'react';
// import Products from './Products'

const ProductCard = ({product}) => {
  const buy = document.getElementById('buynow')
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  // function buyNow() {
  //   buy.addEventListener('click', ({product}) => {
  //     // <Modal />
  //     alert('Hello')
  //   })
  // } 

  return (
    <div className='grid items-center p-3 border-[3px] hover:border-[#E63946]'>
        <div>
            <img className='' src={product.image} alt="" width={200} />
        </div>
        <div>
          <p className='font-semibold'>{product.title}</p>
          {/* <p>{product.contents}</p> */}
          <p className='py-2 font-medium'>₦{product.price}</p>
          <button id='buynow' className='border-none py-2 mb-2 w-[120px] bg-[#E63946] text-white font-semibold' onClick={handleShow}>Preview</button>
        </div>
        
        <div>
          <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary">Add To Cart</Button>
          </Modal.Footer>
        </Modal>
        </div>

    </div>
  )
}

export default ProductCard