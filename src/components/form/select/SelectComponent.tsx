import React, { Component } from 'react';
import ErrorMessageComponent from '../ErrorMessageComponent';
import { FormSelectProps } from '../FormSelectProps';
import './SelectComponent.css';

class SelectComponent extends Component<FormSelectProps> {
  public render() {
    return (
      <div className="select">
        <label className="select__label">
          {this.props.name}:
          <select className="select__control" ref={this.props.refObject}>
            {this.props.options.map((option) => (
              <option key={crypto.randomUUID()}>{option}</option>
            ))}
          </select>
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

export default SelectComponent;
