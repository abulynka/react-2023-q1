import './HeaderComponent.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar } from '@mui/material';

class HeaderComponent extends Component {
  public render(): JSX.Element {
    return (
      <AppBar position="static" className="header">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link className="header__item" to="/">
              Main
            </Link>
            <Link className="header__item" to="/about">
              About Us
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default HeaderComponent;
