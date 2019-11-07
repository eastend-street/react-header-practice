import React from "react";
import "./Header.scss";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Binarybrocks</div>
      <Menu />
    </header>
  );
};

export default Header;
