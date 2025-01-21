const Cart = () => {
    const cartItems = [
      { id: "1", name: "Modern Sofa", price: 1200, quantity: 1 },
      { id: "2", name: "Wooden Chair", price: 200, quantity: 2 },
    ];
  
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <ul className="mt-4">
          {cartItems.map((item) => (
            <li key={item.id} className="mb-2">
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-lg font-bold">Total: ${total}</p>
        <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">Proceed to Checkout</button>
      </div>
    );
  };
  
  export default Cart;
  