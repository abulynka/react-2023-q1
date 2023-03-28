import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import FormCardListComponent from './FormCardListComponent';
import React from 'react';
import FormItem from '../../data/FormItem';

describe('FormCardListComponent', () => {
  it('Check Number Of links', () => {
    const formItems: FormItem[] = [
      {
        name: 'Test1',
        bestBeforeDate: 'Test1',
        deliveryBy: 'Test1',
        cook: false,
        shouldBePackedYes: false,
        shouldBePackedNo: true,
        file: '',
        files: null,
        key: '1',
      },
      {
        name: 'Test2',
        bestBeforeDate: 'Test2',
        deliveryBy: 'Test2',
        cook: false,
        shouldBePackedYes: false,
        shouldBePackedNo: true,
        file: '',
        files: null,
        key: '2',
      },
    ];

    render(
      <MemoryRouter>
        <FormCardListComponent formItems={formItems} />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('heading')).toHaveLength(10);
  });
});
