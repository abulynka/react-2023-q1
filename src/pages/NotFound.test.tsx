import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import NotFound from './NotFound';
import React from 'react';

describe('NotFound', () => {
  it('Check Number Of links', () => {
    render(<NotFound />);
    expect(screen.getByRole('article')).toHaveTextContent('Not Found Page');
  });
});
