import React from "react";
import "./Menu.scss";
import NavLink from "../NavLink/NavLink";

class Menu extends React.Component {
  state = {
    navLinkArr: [
      {
        text: "Overview",
        url: "",
        isCurrentPage: true
      },
      {
        text: "The core",
        url: "",
        isCurrentPage: false
      },
      {
        text: "Solutions",
        url: "",
        isCurrentPage: false
      },
      {
        text: "About",
        url: "",
        isCurrentPage: false
      }
    ]
  };

  render() {
    return (
      <div className="menu">
        {this.state.navLinkArr.map(eachNav => {
          return <NavLink text={eachNav.text} />;
        })}
        <div className="button">Let's start</div>
      </div>
    );
  }
}

export default Menu;
