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
        
        <div className=''>
          <Modal show={showModal} onHide={handleClose} className='border w-[450px] rounded-lg justify-center shadow-lg absolute top-[900px] mx-[525px] z-10 bg-white py-5'>
          <Modal.Header closeButton className='pl-8'>
            <Modal.Title className='text-[50px]'>{product.title}</Modal.Title>
            <Modal.Title className='text-[20px]'>Contents</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ whiteSpace: 'pre-line' }} className='pl-8 py-5'>
            {product.contents}
          </Modal.Body>

          <Modal.Footer className='flex justify-center gap-x-10'>
            <Button variant="secondary" onClick={handleClose} className='border p-3 rounded-md font-semibold '>Close</Button>
            <Button variant="primary" className='border p-3 rounded-md font-semibold bg-[#E63946] text-white outline-none'>Add To Cart</Button>
          </Modal.Footer>
        </Modal>
        </div>

    </div>
  )
}

export default ProductCard