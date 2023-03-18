import './CardComponent.css';
import React, { Component } from 'react';
import CardItem from '../../data/CardItem';

class CardComponent extends Component<{ card: CardItem }> {
  public render(): JSX.Element {
    return (
      <section className="card">
        <h3 className="card__title">{this.props.card.title}</h3>
        <img className="card__image" src={this.props.card.imageURL} alt={this.props.card.title} />
        <div className="card__desc">{this.props.card.desc}</div>
        <div className="card__container">
          <div className="card__container-likes">Likes: {this.props.card.likes}</div>

          <div className="card__container-views">Views: {this.props.card.views}</div>
        </div>
      </section>
    );
  }
}

export default CardComponent;
