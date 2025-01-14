import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { Navbar } from "../components/Navbar";
import Empty from '../assets/empty.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function Cart() {
    const { cart, setCart, removeFromCart, updateQuantity, totalPrice } = useCart();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const checkout = () => {
        setShow(true);  // Show modal first
        setCart([]); // Then clear cart
    };

    return ( 
        <div>
            <Navbar />
            <h2 className="text-center text-[50px] font-semibold mb-24">Shopping Cart</h2>
            
            <Modal 
                show={show} 
                onHide={handleClose}
                centered // Centers the modal vertically
                aria-labelledby="checkout-modal"
                className='border rounded-lg justify-center shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white py-5'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="checkout-modal" className="font-semibold text-center text-[50px] px-10 lg:px-9">Order Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    Your order has been processed successfully!
                </Modal.Body>
                <Modal.Footer className="grid justify-center">
                    <Button className="border my-4 p-3 rounded-lg font-semibold bg-[#E63946] text-white outline-none" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {cart.length === 0 ? (
                <div className="grid justify-center">
                    <img className="pl-5" src={Empty} width={100} alt="Cart"></img>
                    <p className="py-3 font-semibold">Your Cart Is Empty</p>
                </div>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="border p-3 mb-3">
                            <p><strong>{item.title}</strong></p>
                            <p>Price: ₦{item.price}</p>
                            <p>
                                Quantity:{" "}
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={(e) =>
                                        updateQuantity(item.id, Math.max(1, Number(e.target.value)))
                                    }
                                    className="border p-1 w-[60px] text-center"
                                />
                            </p>
                            <p>Total: ₦{item.price * item.quantity}</p>
                            <button 
                                className="text-red-500" 
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <h3 className="mt-5 font-bold text-right px-10">Total Price: ₦{totalPrice}</h3>
                    <div className="flex justify-end px-9 py-2 pb-10">
                        <button 
                            className="border p-3 rounded-lg bg-[#E63946] text-white font-semibold outline-none" 
                            onClick={checkout}
                        >
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}