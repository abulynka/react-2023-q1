import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import InputCheckboxComponent from './InputCheckboxComponent';
import React, { createRef } from 'react';

describe('InputCheckboxComponent', () => {
  it('Check', () => {
    render(
      <InputCheckboxComponent
        key={'1'}
        name={'Name'}
        refObject={createRef<HTMLInputElement>()}
        errorMessages={[]}
        title={'Title'}
      />
    );
    expect(screen.getAllByRole('checkbox')).toHaveLength(1);
  });
});
