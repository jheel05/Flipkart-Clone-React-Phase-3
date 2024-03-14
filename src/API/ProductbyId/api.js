
export async function fetchProductById(productId) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching product: ${error.message}`);
  }
}
