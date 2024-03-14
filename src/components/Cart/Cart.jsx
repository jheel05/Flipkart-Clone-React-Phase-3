// import React from "react";
import { useCart } from "../../Context/CartContext";
import { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";
import { Link } from "react-router-dom";
import "../Cart/cart.scss";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { user } = useContext(UserContext);
  const { cartCount, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    if (promoCode === "SUMMER") {
      setDiscount(0.5); 
    } else if (promoCode === "SALE") {
      setDiscount(0.3);
    } else if (promoCode === "FLIPKART10") {
      setDiscount(0.1);
    } else {
      alert("Invalid Promo Code");
    }
  };
  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const discountAmount = subtotal * discount;
  const totalAfterDiscount = subtotal - discountAmount;

  const handleCheckout = () => {
    clearCart();
    navigate("/Checkout");
  };

  if (!user) {
    return (
      <div className="px-4 bg-white mx-4 mt-4 py-16">
        <img
          className="mx-auto pb-4 w-64"
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        />
        <p className="font-bold text-center text-2xl py-2">
          Missing Cart Items?
        </p>
        <p className="text-center font-light text-gray-500">
          Login to see the items you added previously!
        </p>
        <div className="flex justify-center">
          <Link to={"/Login"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded m-4">
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container bg-white mx-4 my-4 ">
      {cart.length === 0 ? (
        <div className="px-4 bg-white mx-4 mt-4 py-16">
          <img
            className="mx-auto pb-4 w-64"
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          />
          <p className="font-bold text-center text-2xl py-2">
            Your cart is empty!
          </p>
          <p className="text-center font-light text-gray-500">
            Add items to it now.
          </p>
          <div className="flex justify-center">
            <Link to={"/"}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded m-4">
                Shop Now
              </button>
            </Link>
          </div>
        </div> 
      ) : (
        <div className="m-4">
          <h1 className="font-bold text-left text-3xl mb-4 pb-4 border-b-2">
            Shopping Cart
          </h1>
          <div className="head-container mb-16">
            <ul className="breadcrumb">
              <li>Home</li>
              <li>Shopping Cart</li>
            </ul>

            <span className="count">
              {cartCount > 0 && <span className="">{cartCount}</span>} items in
              the bag
            </span>
          </div>
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div className="info">
                <div className="title">{product.title}</div>
                <div className="price">${product.price}</div>
              </div>
              <div className="quantity">
                <button
                  onClick={() =>
                    updateQuantity(product.id, product.quantity - 1)
                  }
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(product.id, product.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <form onSubmit={handlePromoSubmit} className="Promo">
            <label htmlFor="promoCode">Have any PromoCode?</label>
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
            />
            
            <button type="submit">Apply</button>
          </form>
          <div className="cart-total">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Discount: -${discountAmount.toFixed(2)}</p>
            <p className="font-bold">Total: ${totalAfterDiscount.toFixed(2)}</p>
          </div>
          <div className="button-container">
            <button onClick={clearCart} className="clear-btn">
              Clear Cart
            </button>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
