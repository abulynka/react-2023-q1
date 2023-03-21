import './HeaderComponent.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderComponent extends Component {
  public render(): JSX.Element {
    return (
      <header className="header">
        <NavLink className="header__item" to="/">
          Main
        </NavLink>
        <NavLink className="header__item" to="/about">
          About Us
        </NavLink>
      </header>
    );
  }
}

export default HeaderComponent;
