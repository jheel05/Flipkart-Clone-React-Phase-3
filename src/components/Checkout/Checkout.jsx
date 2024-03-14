import { useState, useContext } from 'react';
import '../Checkout/Checkout.css'; 
import { Link } from 'react-router-dom';
import UserContext from "../../Context/UserContext";

function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: '',
  });
  const [confirmedData, setConfirmedData] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false); 
  const {user} = useContext(UserContext);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmedData(formData);
  };

  const handleConfirmOrder = () => {
    setOrderPlaced(true);
  };
  
  if (!user) {
    return (<div className="px-4 bg-white mx-4 mt-4 py-16">
    <img
      className="mx-auto pb-4 w-64"
      src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
    />
    <p className="font-bold text-center text-2xl py-2">
      No User! 
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
      <Link to={"/"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded m-4">
          Shop Now
        </button>
      </Link>
    </div>
  </div>);
  }    
  

  return (
    <div className="checkout-container">
      {!confirmedData ? (
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Enter Your Name</h2>
          <label>
            
            <input
              type="text"
              name="name"
              placeholder='Enter your Name'
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
            />
          </label>
          <h2>Enter Address</h2>
          <label>
            
            <input
              type="text"
              name="address"
              placeholder='Enter your address'
              value={formData.address}
              onChange={handleChange}
              required
              className="input-field"
            />
          </label>
          <h2>Select Payment Method</h2>
          <div className="payment-method-options">
            <label className="payment-method-label">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={formData.paymentMethod === 'Cash on Delivery'}
                onChange={handleChange}
                required
              />
              &nbsp; Cash on Delivery
            </label>
            <label className="payment-method-label">
              <input
                type="radio"
                name="paymentMethod"
                value="Pay using UPI"
                checked={formData.paymentMethod === 'Pay using UPI'}
                onChange={handleChange}
                required
              />
              &nbsp; Pay using UPI
            </label>
            <br></br>
            <button type="submit" className="submit-button">Submit</button>
          </div>
          
        </form>
      ) : (
        <div className="confirmation-container">
          {!orderPlaced ? ( 
            <>
              <h2>Confirm Order</h2>
              <p><strong>Name:</strong> {confirmedData.name}</p>
              <p><strong>Address:</strong> {confirmedData.address}</p>
              <p><strong>Payment Method:</strong> {confirmedData.paymentMethod}</p>
              <button onClick={handleConfirmOrder} className="confirm-button">Confirm Order</button>
            </>
          ) : (
            <div className="order-placed-animation">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/order-placed-purchased-icon.png" alt="Order Placed" />
              <h2>Order Placed Successfully!</h2>
              <Link to={"/"}><button className='home-btn'>Back To Home</button></Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
