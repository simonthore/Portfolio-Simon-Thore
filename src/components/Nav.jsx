import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {

  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className="">
      <nav
        className={`navbar ${
          showLinks ? "show-nav" : "hide-nav"
        } top-0 fixed z-30`}
      >
   
        <ul className="navbar_links">
          <Link to="/">
            <button
              type="button"
              onClick={handleShowLinks}
              className="navbar_link slideInDown-1 "
            >
              Accueil
            </button>
          </Link>
          <Link to="/Animations">
            <button
              type="button"
              onClick={handleShowLinks}
              className="navbar_link slideInDown-3"
            >
              Nos Animations
            </button>
          </Link>
          <Link to="/Request">
            <button
              type="button"
              onClick={handleShowLinks}
              className="navbar_link slideInDown-3 "
            >
              Nos produits
            </button>
          </Link>
         
          
          
        </ul>
        <button
          type="button"
          className="navbar_burger"
          onClick={handleShowLinks}
        >
          <span className="burger-bar" />
        </button>
        <div className="font-bold  text-gray-500  mx-14 py-20    md:absolute md:right-2 p-2  mt md:flex ">
          <div className="navbar_link slideInDown-3 text-center">

          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
