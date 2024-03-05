

import { categoriesList } from "../CategoryBar/categorybar.js";


function CategoriesBar() {

  return (
    <div className="mt-2 mx-4 mb-4">
      <div className="h-full w-fulls flex overflow-x-auto p-2 md:p-4 scrollbar-hide space-x-4 md:space-x-16 bg-white justify-center ">
      {categoriesList?.map((item) => (
        // eslint-disable-next-line react/jsx-no-undef
        <a key={item.title} to={`/category/${item.title}`}>
          <div className="w-fit h-fit flex flex-col justify-between md:gap-2 items-center hover:cursor-pointer">
            <img className="w-[40px] md:w-[65px] h-[40px] md:h-[65px]" src={item.imgSrc} alt="logo" />
            <h3 className="text-center font-medium text-xs md:text-sm">{item.title}</h3>
          </div>
        </a>
      ))}
      </div>
    </div>
  );
}

export default CategoriesBar;
