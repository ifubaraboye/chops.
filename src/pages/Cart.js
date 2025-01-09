import React from "react";
import { useCart } from "../components/CartContext";

export function Cart() {
    const {cart, removeFromCart, updateQuantity, totalPrice} = useCart()
    return (
        <div>
            <h2>Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
            ) : (
        cart.map((item) => (
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
                <button className="text-red-500" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
        ))
    )}
        <h3>Total Price: ₦{totalPrice}</h3>
    </div>
    )
}