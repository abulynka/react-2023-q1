import './Main.css';
import React, { Component } from 'react';
import SearchComponent from '../components/search/SearchComponent';
import CardListComponent from '../components/card/CardListComponent';

class Main extends Component {
  public render() {
    return (
      <main className="main">
        <div className="main__search">
          <SearchComponent />
        </div>
        <CardListComponent />
      </main>
    );
  }
}

export default Main;
