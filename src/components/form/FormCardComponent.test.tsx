import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import FormCardComponent from './FormCardComponent';
import React from 'react';
import FormItem from '../../data/FormItem';

describe('FormCardComponent', () => {
  it('Check Number Of links', () => {
    const formItem: FormItem = {
      name: 'Test',
      bestBeforeDate: 'Test',
      deliveryBy: 'Test',
      cook: false,
      shouldBePackedYes: false,
      shouldBePackedNo: true,
      file: '',
      files: null,
    };

    render(
      <MemoryRouter>
        <FormCardComponent formItem={formItem} />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('heading')).toHaveLength(5);
  });
});
