import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../api/ProductbyId/api";
import { useCart } from "../../Context/CartContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./ProductDes.scss";

const ProductDescriptionPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await fetchProductById(productId);
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [productId]);

  if (loading) {
    return (
      <div className="px-4 bg-white mx-4 mt-4 py-56 text-center font-bold text-xl">
        Loading data...
      </div>
    );
  }

  if (!product) {
    return <div>Product not found!!</div>;
  }
  const renderStars = () => {
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <span key={index} className="star-rating">
            &#9733;
          </span>
        ))}
        {halfStar && <span className="star-rating">&#9734;</span>}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index + fullStars} className="star-rating">
            &#9734;
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="container ">
      <div className="img-container pt-12">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image-des"
        />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-rating">
          {renderStars()}({product.rating})
        </p>
        <h2 className="product-des font-bold">About this Product:</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Special Price: ${product.price}</p>
        <p className="product-brand">Brand: {product.brand}</p>
        <div className="space-y-4">
          <button className="ml-4 py-2 px-4 border mt-4 border-gray-300 rounded hover:bg-blue-600 hover:text-white focus:outline-none focus:shadow-outline-blue active:bg-gray-200 transition duration-150 ease-in" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
