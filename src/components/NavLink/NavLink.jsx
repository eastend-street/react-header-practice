import React from "react";
import "./NavLink.scss";

const NavLink = ({ text, url, isCurrentPage }) => {
  return (
    <div className="nav-link">
      <a href={url}>{text}</a>
    </div>
  );
};

export default NavLink;
