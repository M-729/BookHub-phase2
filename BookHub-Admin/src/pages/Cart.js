import React from "react";

function Cart({ cart, onRemoveFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <div className="text-center mb-12 py-8 px-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl">
        <h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg text-center py-16 px-6">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 text-lg mb-8">Start adding some books to your cart!</p>
          <a href="/books" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-colors inline-block">
            Books Zone
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-6 items-center">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-32 h-40 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">by {item.author}</p>
                  <p className="text-green-600 text-xl font-bold">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-lg font-bold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">Order Summary</h2>
            <div className="flex justify-between mb-4 text-gray-700">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-700">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-700">
              <span>Tax:</span>
              <span>${(total * 0.08).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-gray-800 pt-4 border-t border-gray-200">
              <span>Total:</span>
              <span>${(total * 1.08).toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold text-lg transition-colors mt-6"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;