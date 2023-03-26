import React from 'react';

export interface FormSelectProps {
  refObject: React.RefObject<HTMLSelectElement>;

  name: string;

  options: string[];

  errorMessages: string[];
}
