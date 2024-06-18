import { useState } from "react";
import logo from "../../public/assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
// import { IoIosHeartEmpty } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menu = [
    { pageName: "Home", path: "/" },
    { pageName: "Store", path: "/store" },
    { pageName: "Deals", path: "/deals" },
    { pageName: "Contact", path: "/contact" },
  ];
  const iconMenu = [
    { icon: <PiShoppingCartLight />, path: "/" },
    { icon: <LuUser />, path: "/" },
  ];
  return (
    <section className="lg:container lg:mx-auto py-2 px-4">
      <div className="row grid grid-cols-3 mb-2 relative ">
        {/* <div className="row   flex justify-between items-center   mb-2 relative "> */}
        <div className="column w-1/3 grid grid-flow-col content-center justify-start hidden lg:grid">
          <input type="text" placeholder="Search for product " />
          <IoSearchOutline />
        </div>
        <div className="column w-1/3 mobileMenu lg:hidden ">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-color_accent" />
            ) : (
              <FaBars className="w-5 h-5 text-color_accent" />
            )}
          </button>
        </div>
        <div className="column  grid justify-center">
          <Link to="/"><img className="w-40 " src={logo} /></Link>
        </div>
        <div className="column flex justify-end">extra</div>
        <div className="column ">
          <ul className="flex gap-4">
            {/* {
              iconMenu.map(({ item, index }) => (
                <Link key={index} to={item.path}>
                  <li className="flex items-center gap-2 text-primary-color text-2xl">
                    {item.icon} {item.pageName}
                  </li>
                </Link>
              ))
            } */}
          </ul>
        </div>
        {/* mobile menu starts */}
        <div
          className={`absolute top-[100%] p-4 w-1/2 h-dvh bg-red-100 lg:hidden ${isMenuOpen ? "" : "hidden"
            }`}
        >
          <ul className="">
            {/*   
            {menu.map(({ pageName, path, icon }) => (
                  <li key={pageName} className="flex items-center gap-2 p-2 text-primary-color text-xl">
                <Link  path={path}>
                    {icon} {pageName} 
                </Link>
                  </li>
              ))} */}
          </ul>
        </div>
        {/* mobile menu ends */}
      </div>
      <hr />

      <div className=" row justify-center flex ">
        <div className="column lg:block hidden ">
          <ul className="flex ">
            {menu.map((item, index) => (
              <Link key={index} to={item.path}>
                <li className="px-4 py-2  grid-flow-col content-center justify-center gap-1">
                  {item.icon} {item.pageName}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="column grid grid-flow-col content-center justify-start lg:hidden ">
          <input type="text" placeholder="Search for product " />
          <IoSearchOutline />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
