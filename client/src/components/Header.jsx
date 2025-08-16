import React, { useState } from "react";
import { Link } from 'react-router-dom';
import countries from "./countries";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import logo from './../assets/logo.png';

function Header() {
  const [active, setActive] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const category = ["business", "entertainment", "general", "health", "science", "sports", "technology", "politics"];

  return (
    <header>
      <nav>
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-10 object-cover rounded-full shadow-md logo-img" />
          <h3 className="heading news-title">News 24x7*</h3>
          
        </div>

        {/* Nav Links */}
        <ul className={active 
            ? "nav-ul flex gap-10 active" 
            : "nav-ul flex gap-10"}>
          
          <li>
            <Link 
              to="/" 
              className="font-semibold hover:text-red-600 transition"
              onClick={() => setActive(!active)}
            >
              All News
            </Link>
          </li>

          {/* Category Dropdown */}
          <li className="dropdown-li">
            <Link 
              className="font-semibold flex items-center gap-2 hover:text-red-600 transition"
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowCountryDropdown(false);
              }}
            >
              Top-Headlines
              <FontAwesomeIcon 
                className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} 
                icon={faCircleArrowDown} 
              />
            </Link>
            <ul className={showCategoryDropdown ? "dropdown show-dropdown" : "dropdown"}>
              {category.map((element, index) => (
                <li key={index} onClick={() => setShowCategoryDropdown(false)}>
                  <Link 
                    to={`/top-headlines/${element}`} 
                    className="capitalize hover:text-red-600 transition"
                    onClick={() => setActive(!active)}
                  >
                    {element}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Country Dropdown */}
          <li className="dropdown-li">
            <Link 
              className="font-semibold flex items-center gap-2 hover:text-red-600 transition"
              onClick={() => {
                setShowCountryDropdown(!showCountryDropdown);
                setShowCategoryDropdown(false);
              }}
            >
              Country
              <FontAwesomeIcon 
                className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} 
                icon={faCircleArrowDown} 
              />
            </Link>
            <ul className={showCountryDropdown ? "dropdown show-dropdown" : "dropdown"}>
              {countries.map((element, index) => (
                <li key={index} onClick={() => setShowCountryDropdown(false)}>
                  <Link 
                    to={`/country/${element?.iso_2_alpha}`} 
                    className="flex gap-3 hover:text-red-600 transition"
                    onClick={() => setActive(!active)}
                  >
                    <img
                      src={element?.png}
                      srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`}
                      alt={element?.countryName} 
                    />
                    <span>{element?.countryName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        

        {/* Hamburger Menu */}
        <div 
          className={active ? "ham-burger ham-open" : "ham-burger"} 
          onClick={() => setActive(!active)}
        >
          <span className="lines"></span>
          <span className="lines"></span>
          <span className="lines"></span>
          
        </div>
      </nav>
    </header>
  );
}

export default Header;
