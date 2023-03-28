import React, { Component } from 'react';
import { FormInputProps } from '../FormInputProps';
import ErrorMessageComponent from '../ErrorMessageComponent';
import './InputComponent.css';

class InputComponent extends Component<FormInputProps> {
  public render() {
    return (
      <div className="input">
        <label className="input__label">
          {this.props.name}:
          <input type="string" className="input__control" ref={this.props.refObject}></input>
        </label>

        {this.props.errorMessages.map((errorMessage: string) => (
          <ErrorMessageComponent
            key={this.props.keyValue + errorMessage}
            errorMessage={errorMessage}
          ></ErrorMessageComponent>
        ))}
      </div>
    );
  }
}

export default InputComponent;
