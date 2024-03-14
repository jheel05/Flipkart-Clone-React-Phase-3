import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/CategoryProducts/CategoryProductAPI";
import "./ProductsListCategory.scss";
import { useMemo } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const categories = useMemo(
    () => ["smartphones", "laptops", "sunglasses"],
    []
  );
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
  }, [categories]);

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
              <Link key={product.id} to={`/data/products/${product.id}`} >
                <div className="product">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="product-image"
                  />
                  <h3>{product.title}</h3>

                  <p><span className="star-rating">
            &#9733;
          </span> {product.rating}</p>
                  <p>{product.brand}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;


