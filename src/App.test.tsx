import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import React from 'react';

describe('App', () => {
  it('Check Number Of links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
