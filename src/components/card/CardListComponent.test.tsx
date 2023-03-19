import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardListComponent from './CardListComponent';
import React from 'react';

describe('CardListComponent', () => {
  it('Check Number Of Cards', () => {
    render(<CardListComponent />);
    expect(screen.getAllByRole('heading')).toHaveLength(4);
  });
});
