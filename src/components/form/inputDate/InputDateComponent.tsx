import React, { Component } from 'react';
import { FormInputProps } from '../FormInputProps';
import ErrorMessageComponent from '../ErrorMessageComponent';

class InputDateComponent extends Component<FormInputProps> {
  public render() {
    return (
      <div className="input-date">
        <label className="input-date__label">
          {this.props.name}:
          <input type="date" className="input-date__control" ref={this.props.refObject}></input>
        </label>

        {this.props.errorMessages.map((errorMessage: string) => (
          <ErrorMessageComponent
            key={crypto.randomUUID()}
            errorMessage={errorMessage}
          ></ErrorMessageComponent>
        ))}
      </div>
    );
  }
}

export default InputDateComponent;
