import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import * as productService from "../../api/productApi";
// import ProductCard from "../../components/ui/ProductCard";
// import SearchProductPage from "../../pages/SearchProductPage";

function SearchBar() {
  const [search, setSearch] = useState("");
  // const [searchProduct, setSearchProduct] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <form className="row grow ml-5 mr-10" onSubmit={handleSearchSubmit}>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>
        <input
          type="text"
          name="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange"
          placeholder="Search Product"
          onChange={handleSearchChange}
        />
      </div>
      <div className="w-[86%] flex items-center mx-auto">
        <div className="flex flex-wrap py-2 justify-center gap-x-4 gap-y-6"></div>
      </div>
    </form>
  );
}

export default SearchBar;
