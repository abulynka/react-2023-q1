import './SearchComponent.css';
import React, { ChangeEvent, Component } from 'react';

class SearchComponent extends Component<object, { input: string }> {
  constructor(props: object) {
    super(props);
    this.state = { input: localStorage.getItem('search__text') || '' };
  }

  public render(): JSX.Element {
    return (
      <div className="search">
        <input
          className="search__text"
          defaultValue={this.state.input}
          onChange={(value: ChangeEvent<HTMLInputElement>) =>
            this.setState({ input: value.target.value })
          }
        ></input>
        <button className="search__button">Search</button>
      </div>
    );
  }

  public componentWillUnmount(): void {
    localStorage.setItem('search__text', this.state.input);
  }
}

export default SearchComponent;
