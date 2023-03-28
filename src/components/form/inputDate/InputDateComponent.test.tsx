import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import InputDateComponent from './InputDateComponent';
import React, { createRef } from 'react';

describe('InputDateComponent', () => {
  it('Check', () => {
    render(
      <InputDateComponent
        key={'1'}
        name={'Name'}
        refObject={createRef<HTMLInputElement>()}
        errorMessages={[]}
      />
    );
    expect(screen.getAllByText('Name:')).toHaveLength(1);
  });
});
