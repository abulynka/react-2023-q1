import './Search.css';
import React, { Component } from 'react';
import { Button, TextField } from '@mui/material';

class Search extends Component {
  public render(): JSX.Element {
    return (
      <div className="search">
        <div className="search__text">
          <TextField />
        </div>
        <div className="search__button">
          <Button variant="contained">Search</Button>
        </div>
      </div>
    );
  }
}

export default Search;
