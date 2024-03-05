// ProductList.js

import { useEffect, useState } from "react";
import { fetchProducts } from "../../utils/api";
import "../PoductsList/ProductsList.scss";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState({});

  async function fetchData(categoryName) {
    try {
      const data = await fetchProducts(categoryName);
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchData('smartphone');
    fetchData('cars');
    fetchData('watch');
    // fetchData('smartphone');
  }, []);

  // useEffect(() => {
  //   const updatedCategories = {};

  //   products.forEach((product) => {
  //     if (!updatedCategories[product.category]) {
  //       updatedCategories[product.category] = [];
  //     }
  //     if (updatedCategories[product.category].length < 5) {
  //       updatedCategories[product.category].push(product);
  //     }
  //   });

  //   setCategories(updatedCategories);
  // }, [products]);

  if (loading) {
    return (
      <div>
        <h1 className="text-center text-3xl mt-5 mb-5 italic">Loading...</h1>
      </div>
    );
  }


  return (
    <div className="product-list mt-2 mx-4 mb-4">
      {Object.keys(categories).map((category) => (
        <div key={category} className="category">
          <h2 className="category-title">Best of {category}</h2>
          <div className="products">
            {categories[category].map((product) => (
              <div key={product.id} className="product">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-image"
                />
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
                <p>Brand: {product.brand}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

