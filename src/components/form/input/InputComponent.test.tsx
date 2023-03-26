import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import InputComponent from './InputComponent';
import React, { createRef } from 'react';

describe('InputComponent', () => {
  it('Check', () => {
    render(
      <InputComponent
        key={'1'}
        name={'Title'}
        refObject={createRef<HTMLInputElement>()}
        errorMessages={[]}
      />
    );
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  });
});
