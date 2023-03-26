import React from 'react';

export interface FormInputRadioProps {
  refObjectYes: React.RefObject<HTMLInputElement>;
  refObjectNo: React.RefObject<HTMLInputElement>;

  name: string;

  title: string;

  errorMessages: string[];

  keyValue: string;
}
