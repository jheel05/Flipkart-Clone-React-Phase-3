import { useEffect, useState } from "react";
import { fetchProducts } from "../../API/CategoryProducts/CategoryProductAPI";
import "../ProductList/ProductsList.scss";

function ProductList() {
  const categories = ["smartphones", "laptops", "furniture", "sunglasses"];
  const [loading, setLoading] = useState(true);
  const [productsByCategory, setProductsByCategory] = useState({});

  async function fetchData(categoryName) {
    try {
      const data = await fetchProducts(categoryName);
      setProductsByCategory((prevProducts) => ({
        ...prevProducts,
        [categoryName]: data.products,
      }));
    } catch (error) {
      console.error(`Error fetching products for ${categoryName}:`, error);
    }
  }

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        await Promise.all(categories.map((category) => fetchData(category)));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchAllProducts();
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="text-center text-3xl mt-5 mb-5 italic">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="product-list mt-2 mx-4 mb-4">
      {categories.map((categoryName) => (
        <div key={categoryName} className="category">
          <h2 className="category-title">Best of {categoryName}</h2>
          <div className="products">
            {productsByCategory[categoryName].map((product) => (
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
