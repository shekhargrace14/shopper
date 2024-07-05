import { useContext, useEffect, useState } from "react";
import logo from "../../public/assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
// import { IoIosHeartEmpty } from "react-icons/io";
import { LuHeart, LuShoppingCart, LuUser } from "react-icons/lu";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ProductContext } from "../context/productContext";
import SearchResult from "./SearchResult";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const { state: { product, cart, wishlist } } = useContext(ProductContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("")
  console.log(searchInput)
  useEffect(() => {
    setSearchInput('');
  }, [location])
  const menu = [
    { pageName: "Home", path: "/" },
    { pageName: "Store", path: "/store" },
    { pageName: "Deals", path: "/deals" },
    { pageName: "Contact", path: "/contact" },
  ];
  const iconMenu = [
    { icon: <LuUser />, path: "/user",  },
    { icon: <LuHeart />, path: "/wishlist", value: wishlist.length || 0 },
    { icon: <LuShoppingCart/>, path: "/cart", value: cart.length || 0 },
  ];

  return (
    <section className="lg:container lg:mx-auto py-2 px-4">
      <div className="row grid grid-cols-3 mb-2 relative ">
        {/* <div className="row   flex justify-between items-center   mb-2 relative "> */}
        {/* <div className="column w-1/3 grid grid-flow-col content-center justify-start items-center hidden sm:grid">
          <input type="text" placeholder="Search for product" onChange={(e) => setSearchInput(e.target.value)} />
          <IoSearchOutline />
        </div> */}
        <div className="column w-full border-2 border-gray-200 rounded-2xl sm:flex justify-start items-center pr-2  hidden">
          <input className="w-[94%] py-1 px-4 rounded-2xl" type="text" placeholder="Search for product" onChange={(e) => setSearchInput(e.target.value)} />
          <IoSearchOutline />
        </div>
        <div className="column w-1/3 mobileMenu sm:hidden ">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-color_accent" />
            ) : (
              <FaBars className="w-5 h-5 text-color_accent" />
            )}
          </button>
        </div>
        <div className="column  grid justify-center items-center">
          <Link to="/"><img className="w-40 " src={logo} /></Link>
        </div>
        <div className="column flex justify-end items-center">
          <ul className="flex gap-4 pr-4">
            {
              iconMenu.map((item, index) => (
                <Link key={index} to={item.path}>
                  <li className="flex items-center gap-2 text-primary-color text-2xl relative">
                    {item.icon} {item.pageName} {item.value ? (<span className="text-xs flex items-center justify-center text-white text-center w-5 h-5 rounded-full leading-none bg-primary-color absolute top-[-4px] right-[-12px]"> {item.value}</span>) : null}
                  </li>
                </Link>
              ))
            }
          </ul>
        </div>

      </div>

      <hr />

      <div className="row justify-center flex">
        <div className="column sm:block sm:static hidden absolute h-full  left-0 ">
          <ul className="grid justify-between sm:grid-flow-col grid-flow-row">
            {menu.map((item, index) => (
              <Link key={index} to={item.path}>
                <li className="px-4 py-2 rounded-2xl sm:grid-flow-col items-center justify-center gap-1 hover:bg-gray-100">
                  {item.pageName}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {isMenuOpen ?
          <div className="column lg:block sm:static absolute h-full w-1/2 left-0 bg-gray-100 z-40">
            <ul className="grid sm:grid-flow-col grid-flow-row">
              {menu.map((item, index) => (
                <Link key={index} to={item.path}>
                  <li className="px-4 py-2 sm:grid-flow-col content-center justify-center gap-1">
                    {item.icon} {item.pageName}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          :
          ""
        }
        <div className="column w-full border-2 border-gray-200 rounded-2xl flex justify-start items-center sm:hidden mt-2 ">
          <input className="w-[94%] py-1 px-4 rounded-2xl" type="text" placeholder="Search for product" onChange={(e) => setSearchInput(e.target.value)} />
          <IoSearchOutline />
        </div>
      </div>
      <SearchResult searchInput={searchInput} />
    </section>
  );
};

export default Navbar;
