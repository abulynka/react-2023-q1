import React, { Component } from 'react';
import { FormInputCheckboxProps } from '../FormInputCheckboxProps';
import ErrorMessageComponent from '../ErrorMessageComponent';

class InputCheckboxComponent extends Component<FormInputCheckboxProps> {
  public render() {
    return (
      <div className="input-checkbox">
        <fieldset className="form__item">
          <legend>{this.props.title}:</legend>
          <div>
            <input
              type="checkbox"
              id={this.props.name}
              name={this.props.name}
              ref={this.props.refObject}
            />
            <label htmlFor={this.props.name}>{this.props.name}</label>
          </div>
        </fieldset>

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

export default InputCheckboxComponent;
