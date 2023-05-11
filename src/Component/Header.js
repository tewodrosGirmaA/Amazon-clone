import React, { useRef } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import usFlag from "../Image/usflag.jpg";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  const header_searchRef = useRef();
  const header_searchIconBtnRef = useRef();
  const allBtnRef = useRef();
  const searchBrdrColor = () => {
    header_searchRef.current.classList.add("active");
    header_searchIconBtnRef.current.classList.remove("addBorder");
    allBtnRef.current.classList.remove("addBorder");
  };
  const searchIconBtn = () => {
    header_searchRef.current.classList.remove("active");
    header_searchIconBtnRef.current.classList.add("addBorder");
    allBtnRef.current.classList.remove("addBorder");
  };
  function myFunction() {
    document.getElementById("Amazon__Dropdown").classList.toggle("show");
    allBtnRef.current.classList.add("addBorder");
    header_searchRef.current.classList.remove("active");
    header_searchIconBtnRef.current.classList.remove("addBorder");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".drop__btn")) {
      var Amazondropdowns = document.getElementsByClassName(
        "Amazon__dropdown__content"
      );
      var i;
      for (i = 0; i < Amazondropdowns.length; i++) {
        var openDropdown = Amazondropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  //  const searchBarBgBorder=()=>{
  //     Document.getElementsById("search-bar").style.border="2px solid #cd9042";
  //     Document.getElementsById("search-bar").style.background="#cd9042";

  //   }
  return (
    <>
      {/* header section */}
      <div className="header">
        <div className="left-wrapper">
          <div className="header-logo-wrapper">
            <Link to="/">
              <img
                className="header__logo header__hover"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="header logo"
              />
            </Link>
          </div>
          <div className="deliver">
            <p>Deliver to</p>
            <h5>
              <LocationOnIcon fontSize="small" /> <span> Ethiopia</span>{" "}
            </h5>
          </div>
        </div>
        {/* onClick={searchBarBgBorder} */}
        <div ref={header_searchRef} className="header__search dropdown__btn  ">
          <button
            ref={allBtnRef}
            onClick={myFunction}
            className="drop__btn all"
          >
            All <ArrowDropDownIcon className="header__dropdown" />
          </button>
          <div id="Amazon__Dropdown" className="Amazon__dropdown__content">
            <option value="search-dept">All Departments</option>
            <option value="arts-and-crafts">Arts &amp; Crafts</option>
            <option value="Automotive">Automotive</option>
            <option value="Baby">Baby</option>
            <option value="Baby-and-personal-care">
              Beauty &amp; Personal Care
            </option>
            <option value="Books">Books</option>
            <option value="Boys'-and- Fashion">Boys' Fashion</option>
            <option value="Computers">Computers</option>
            <option value="Deals">Deals</option>
            <option value="Digital Music">Digital Music</option>
            <option value="Electronics">Electronics</option>
            <option value="Girls'-and-Fashion">Girls' Fashion</option>
            <option value="Health">Health &amp; Household</option>
            <option value="Home">Home &amp; Kitchen</option>
            <option value="Industrial">Industrial &amp; Scientific</option>
            <option value="Kindle Store">Kindle Store</option>
            <option value="Luggage">Luggage</option>
            <option value="Men's-Fashion">Men's Fashion</option>
            <option value="movies-tv-intl-ship">movies-tv-intl-ship</option>
            <option value="Music">Music, CDs &amp; Vinyl</option>
            <option value="Pet">Pet Supplies</option>
            <option value="Prime-Video">Prime Video</option>
            <option value="Software">Software</option>
            <option value="Sports">Sports &amp; Outdoors</option>
            <option value="Tools">Tools &amp; Home Improvement</option>
            <option value="Toys">Toys &amp; Games</option>
            <option value="Video-Games">Video Games</option>
            <option value="Women'sp">Women's Fashion</option>
          </div>
          <input
            onClick={searchBrdrColor}
            className="header__searchInput"
            type="text"
            placeholder="Search Amazon"
          />
          <button
            ref={header_searchIconBtnRef}
            onClick={searchIconBtn}
            type="submit"
            className="header__searchIcon"
          >
            <SearchIcon />
          </button>
        </div>
        <div className="right-wrapper">
          <div className="flag">
            <img src={usFlag} alt="us-flag" />
            <span>
              <ArrowDropDownIcon />
            </span>
          </div>
          <Link
            to={!user && "/Login"}
            className="header__clearlink"
            id="return"
          >
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                hello, {!user ? "Customer" : user.email}
              </span>
              <span className="header__optionLineTwo" id="sign-in">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="./Orders" className="header__clearlink" id="return">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          {/* <div className="header__option header__hover">
          <span className="header__optionLineOne">your</span>
          <span className="header__optionLineTwo">prime</span>
        </div> */}
          <Link to="/Checkout" className="header__clearlink" id="cart">
            <div className="header__optionCart ">
              <span className="header__optionLineTwo header__cart__count">
                {basket?.length}
              </span>
              <ShoppingCartIcon />
              <span className="header__optionLineTwo">Cart</span>
            </div>
          </Link>
        </div>
      </div>
      {/* header section end */}
      {/* subnavigation start here */}
      <nav className="subnavigation" id="top">
        <ul className="submenu">
          <li>
            <a href="##">
              <MenuIcon className="menu__icon" /> All
            </a>
          </li>
          <li>
            <a href="">Today's Deals</a>
          </li>
          <li>
            <a href=""> Customer Service</a>
          </li>
          <li>
            <a href="">Registry</a>
          </li>
          <li>
            <a href="">Gift Cards</a>
          </li>
          <li>
            <a href="">Sell</a>
          </li>
        </ul>
        <ul className="submenu">
          <li className="submenu__right">
            <a href="">New Year, new deals</a>
          </li>
        </ul>
      </nav>
      {/* subnavigation end here */}
    </>
  );
};

export default Header;
