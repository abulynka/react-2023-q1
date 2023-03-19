import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HeaderComponent from './HeaderComponent';
import React from 'react';

describe('HeaderComponent', () => {
  it('Check Number Of links', () => {
    render(
      <MemoryRouter>
        <HeaderComponent />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
