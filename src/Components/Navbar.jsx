import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex text-4xl font-bold justify-between items-center px-[100px] py-3 bg-amber-400">
      <h2>Bipin</h2>
      <div className="flex gap-10 px-10 text-2xl font-semibold ">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
