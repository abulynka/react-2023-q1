import './CardListComponent.css';
import React, { Component } from 'react';
import CardItem from '../../data/CardItem';
import CardModel from '../../models/CardModel';
import CardComponent from './CardComponent';

class CardListComponent extends Component {
  public render(): JSX.Element {
    return (
      <section className="card-list">
        {new CardModel().getCards().map((card: CardItem) => (
          <CardComponent key={card.number} card={card} />
        ))}
      </section>
    );
  }
}

export default CardListComponent;
