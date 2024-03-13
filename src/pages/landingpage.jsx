import Slider from "../components/ImageSlider/imageslider.jsx";
import CategoriesBar from "../components/CategoryBar/categoriesbar.jsx";
import ProductList from "../components/ProductList/ProductsList.jsx";

const LandingPage = () => {
  return (
    <>
      <CategoriesBar />
      <Slider />
      <ProductList />
    </>
  );
};

export default LandingPage;
