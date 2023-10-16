// import React from 'react';
import "../styles/App.css";
import LogoutButton from "./LogOutButton";
import BackIcon from "./BackIcon";

const Header = ({ isResourceDetails }) => {
  return (
    <>
      <div className="header">
        <div className="back">
          {isResourceDetails ? <BackIcon /> : null}
          <img
            src="\src\assets\images\logo.jpg"
            alt="Logo"
            className="logicease"
          />
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default Header;
