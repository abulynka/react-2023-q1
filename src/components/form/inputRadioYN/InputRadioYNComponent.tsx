import React, { Component } from 'react';
import ErrorMessageComponent from '../ErrorMessageComponent';
import { FormInputRadioProps } from '../FormInputRadioProps';
import './InputRadioYNComponent.css';

class InputRadioYNComponent extends Component<FormInputRadioProps> {
  public render() {
    return (
      <div>
        <fieldset className="input-radio">
          <legend>{this.props.title}:</legend>

          <div>
            <input
              type="radio"
              id={this.props.name + '-yes'}
              name={this.props.name}
              value={this.props.name + '-yes'}
              ref={this.props.refObjectYes}
            ></input>
            <label htmlFor={this.props.name + '-yes'}>Yes</label>
          </div>

          <div>
            <input
              type="radio"
              id={this.props.name + '-no'}
              name={this.props.name}
              value={this.props.name + '-no'}
              ref={this.props.refObjectNo}
            ></input>
            <label htmlFor={this.props.name + '-no'}>No</label>
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

export default InputRadioYNComponent;
