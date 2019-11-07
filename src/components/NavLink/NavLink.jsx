import React from "react";
import "./NavLink.scss";

class NavLink extends React.Component {
  navStyle = () => {
    let baseClass = ["nav-link"];
    if (this.props.isCurrentPage) {
      baseClass.push("active");
    }
    return baseClass.join(" ");
  };

  handleClick = e => {
    e.preventDefault();
    this.props.parentFunc(this.props.id);
  };

  render() {
    return (
      <div className={this.navStyle()}>
        <a onClick={this.handleClick}>{this.props.text}</a>
      </div>
    );
  }
}

export default NavLink;
