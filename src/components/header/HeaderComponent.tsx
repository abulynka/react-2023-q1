import './HeaderComponent.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
  public render(): JSX.Element {
    return (
      <header className="header">
        <Link className="header__item" to="/">
          Main
        </Link>
        <Link className="header__item" to="/about">
          About Us
        </Link>
      </header>
    );
  }
}

export default HeaderComponent;
