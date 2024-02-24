import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  const icon = require("../../../images/icon.png");
  const profile_icon = require("../../../images/profile.png");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("toggled");
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="icon" >
        <a href="/">
        <img src={icon} alt="icon" />
        <h2>Farmsolve</h2>
        </a>
      </div>
      <div className="navigations">
        <ul>
          <li><a href="#">Connect Expert</a></li>
          <li><a href="/blogpost">Blog</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Register</a></li>
          <li id="profile">
            <a href="#">
            <img
              src={profile_icon}
              alt="profile"
              style={{ height: 30, width: 30 }}
            />
            </a>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <div className="dropdown-heading" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faList} />
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <ul onClick={toggleDropdown}>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Connect Expert</a></li>
            <li><a href="/blogpost">Blog</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Register</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
