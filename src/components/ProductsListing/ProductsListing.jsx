import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function ListofProducts() {
    const { title } = useParams(); 
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const perPage = 8;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/search?q=${title}&page=${currentPage}&perPage=${perPage}&limit=100`);
                const data = await response.json();
                setProducts(data.products);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        if (title){
                fetchData();
        }
    }, [title, currentPage]);

    const indexOfLastProduct = currentPage * perPage;
    const indexOfFirstProduct = indexOfLastProduct - perPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const handlePageChange = (page) => {
        if (page > 0 && page <= Math.ceil(products.length / perPage)) {
            setCurrentPage(page);
        }
    };

    if (!loading && currentProducts.length === 0) {
        return (
            <div className="px-4 bg-white mx-4 mt-4 py-24">
                <img className="mx-auto pb-8" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png" />
                <p className="font-bold text-center text-2xl py-2">Sorry, no results found!</p>
                <p className="text-center font-light text-gray-500">Please check the spelling or try searching for something else.</p>
            </div>
        );
    }

    return (
        <div className="px-4 py-8 bg-white mx-4 mt-4">
            <h2 className="text-2xl font-semibold mb-4 ml-4">Showing results for &quot;{title}&quot;</h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                    <li key={product.id} className="shadow-lg rounded-lg overflow-hidden">
                        <Link to={`/data/products/${product.id}`}>
                            <div className="px-4 py-6 h-96">
                                <img src={product.thumbnail} alt={product.title} className="w-full h-48  mb-4 object-cover" />
                                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-gra y-700 mb-2">Price: <span className="text-green-700 mb-2">${product.price}</span> </p>
                                <p className="text-yellow-500 mb-2"><span className="star-rating">
            &#9733;
          </span> {product.rating}</p>
                                <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            
            <div className="flex justify-center mt-8 mb-4">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className=" text-blue-600 font-semibold px-4 py-2 text-4xl rounded mr-2 disabled:text-gray-400" >
                    <FaAngleLeft />
                </button>
                {Array.from({ length: Math.ceil(products.length / perPage) }, (_, i) => (
                    <button key={i + 1} onClick={() => handlePageChange(i + 1)} className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500  text-white mx-1 font-semibold' : 'bg-gray-200 mx-1 text-gray-800'}`}>
                        {i + 1}
                    </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(products.length / perPage)} className=" text-blue-600 text-4xl font-semibold px-4 py-2 rounded ml-2 disabled:text-gray-400" >
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
}

export default ListofProducts;
