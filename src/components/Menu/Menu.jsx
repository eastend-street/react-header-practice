import React from "react";
import "./Menu.scss";
import NavLink from "../NavLink/NavLink";

class Menu extends React.Component {
  state = {
    navLinkArr: [
      {
        id: 1,
        text: "Overview",
        url: "#overview",
        isCurrentPage: true
      },
      {
        id: 2,
        text: "The core",
        url: "#core",
        isCurrentPage: false
      },
      {
        id: 3,
        text: "Solutions",
        url: "#solutions",
        isCurrentPage: false
      },
      {
        id: 4,
        text: "About",
        url: "#about",
        isCurrentPage: false
      }
    ]
  };

  handleClick = id => {
    const newArr = this.state.navLinkArr.map(eachNav => {
      if (eachNav.id === id) {
        eachNav.isCurrentPage = true;
      } else {
        eachNav.isCurrentPage = false;
      }
      return eachNav;
    });
    this.setState({ navLinkArr: newArr });
  };

  render() {
    return (
      <div className="menu">
        {this.state.navLinkArr.map((eachNav, index) => {
          return (
            <NavLink
              key={index}
              text={eachNav.text}
              url={eachNav.url}
              isCurrentPage={eachNav.isCurrentPage}
              parentFunc={this.handleClick}
              id={eachNav.id}
            />
          );
        })}
        <div className="button">Let's start</div>
      </div>
    );
  }
}

export default Menu;
