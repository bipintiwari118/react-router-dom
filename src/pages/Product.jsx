import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col text-3xl bg-gray-700 px-10 py-4 text-white mt-10 ml-10 gap-6 items-center">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;
