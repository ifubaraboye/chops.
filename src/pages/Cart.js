import React from "react";
import { useCart } from "../components/CartContext";
import { Navbar } from "../components/Navbar";
import Empty from '../assets/empty.png';

export function Cart() {
    // Destructure setCart from useCart
    const { cart, setCart, removeFromCart, updateQuantity, totalPrice } = useCart();

    const checkout = () => {
        // Clear the cart using setCart
        setCart([]);
        alert('Thank you for your purchase!');
    };

    return ( 
        <div>
            <Navbar />
            <h2 className="text-center text-[50px] font-semibold mb-24">Shopping Cart</h2>
            
            {cart.length === 0 ? (
                <div className="grid justify-center">
                    <img src={Empty} width={100} alt="Cart"></img>
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
