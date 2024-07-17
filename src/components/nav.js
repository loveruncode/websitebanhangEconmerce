import React, { useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import "./nav.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { CiUser } from "react-icons/ci";

const Nav = () => {
  const [auth, setAuth] = useState(null);

  const handleAuth = () => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth({
        name: "Admin",
        email: "admin@gmail.com",
      }); 
    }
  };

  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="icon">
            <MdLocalShipping />
          </div>
          <div className="info">
            <p>Free Shipping When Shopping Up to $1.000.000 VND</p>
          </div>
        </div>
        <div className="mid_header">
          <div className="logo">
            <img src="image/logo.webp" alt="logo" height={50} />
          </div>
          <div className="search_box">
            <input type="text" placeholder="search" />
            <button>
              <AiOutlineSearch />
            </button>
          </div>
          <div className="user">
            <div className="icon">
              {auth ? (
                <>
                  {auth &&  (
                    <div className="user_info">
                      <CiUser />
                      <p>{auth.name}</p>
                    </div>
                  )}
                  <FiLogOut />
                </>
              ) : (
                <FiLogIn />
              )}
            </div>
            <div className="btn">
              <button onClick={handleAuth}>{auth ? "Logout" : "Login"}</button>
            </div>
          </div>
        </div>

        <div className="last_header">
          <div className="logo_web">
              <img src="image/logo.webp" height={40} alt="logo"></img>
          </div>
              <div className="nav"> 
                  <ul>
                    <li> <link to="/" className="link"></link>Home</li>
                    <li> <link to="/shop" className="link"></link>Shop</li>
                    <li> <link to="/about" className="link"></link>About</li>
                    <li> <link to="/contact" className="link"></link>Contact</li>
                  </ul>
              </div>
            <div className="offer">
                <p>flat 10% over all Laptop</p>
            </div>


        </div>
      </div>
    </>
  );
};

export default Nav;
