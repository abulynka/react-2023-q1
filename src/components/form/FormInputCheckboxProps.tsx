import React from 'react';

export interface FormInputCheckboxProps {
  refObject: React.RefObject<HTMLInputElement>;

  name: string;

  title: string;

  errorMessages: string[];

  key: string;
}
