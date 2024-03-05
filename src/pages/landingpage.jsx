import Footer from "../components/Footer/footer.jsx";
import Slider from "../components/ImageSlider/imageslider.jsx";
import CategoriesBar from "../components/CategoryBar/categoriesbar.jsx";
import Navbar from "../components/Navbar/navbar.jsx";
import ProductList from "../components/PoductsList/ProductsList.jsx";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <CategoriesBar />
      <Slider />
      <ProductList />
      <Footer />
    </>
  );
};

export default LandingPage;
