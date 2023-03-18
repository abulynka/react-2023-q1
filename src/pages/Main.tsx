import './Main.css';
import React, { Component } from 'react';
import SearchComponent from '../components/search/SearchComponent';
import CardModel from '../models/CardModel';
import CardComponent from '../components/card/CardComponent';
import CardItem from '../data/CardItem';

class Main extends Component {
  public render() {
    return (
      <main className="main">
        <div className="main__search">
          <SearchComponent />
        </div>
        <section className="main__cards">
          {new CardModel().getCards().map((card: CardItem) => (
            <CardComponent key={card.number} card={card} />
          ))}
        </section>
      </main>
    );
  }
}

export default Main;
