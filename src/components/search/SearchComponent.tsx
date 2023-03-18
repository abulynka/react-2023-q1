import './SearchComponent.css';
import React, { ChangeEvent, Component } from 'react';
import { Button, TextField } from '@mui/material';

class SearchComponent extends Component<object, { input: string }> {
  constructor(props: object) {
    super(props);
    this.state = { input: localStorage.getItem('search__text') || '' };
  }

  public render(): JSX.Element {
    return (
      <div className="search">
        <div className="search__text">
          <TextField
            defaultValue={this.state.input}
            onChange={(value: ChangeEvent<HTMLInputElement>) =>
              this.setState({ input: value.target.value })
            }
          />
        </div>
        <div className="search__button">
          <Button variant="contained">Search</Button>
        </div>
      </div>
    );
  }

  public componentWillUnmount(): void {
    localStorage.setItem('search__text', this.state.input);
  }
}

export default SearchComponent;
