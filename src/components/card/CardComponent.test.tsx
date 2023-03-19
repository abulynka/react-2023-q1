import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardComponent from './CardComponent';
import CardItem from '../../data/CardItem';
import React from 'react';

describe('CardComponent', () => {
  it('Check Title', () => {
    const cardItem: CardItem = {
      number: '0',
      imageURL: '/assets/cabbage.png',
      title: 'cabbage',
      desc: 'tasty cabbage',
      likes: 10,
      views: 1000,
    };
    render(<CardComponent card={cardItem} />);
    expect(screen.getByRole('heading')).toHaveTextContent('cabbage');
  });
});
