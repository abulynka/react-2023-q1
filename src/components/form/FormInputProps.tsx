import React from 'react';

export interface FormInputProps {
  refObject: React.RefObject<HTMLInputElement>;

  name: string;

  errorMessages: string[];

  keyValue: string;
}
