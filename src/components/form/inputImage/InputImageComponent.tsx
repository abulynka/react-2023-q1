import React, { Component } from 'react';
import { FormInputProps } from '../FormInputProps';
import ErrorMessageComponent from '../ErrorMessageComponent';

class InputImageComponent extends Component<FormInputProps> {
  public render() {
    return (
      <div className="input-image">
        <label>
          {this.props.name}:<input type="file" accept="image/*" ref={this.props.refObject}></input>
        </label>
        {this.props.errorMessages.map((errorMessage: string) => (
          <ErrorMessageComponent
            key={this.props.key + errorMessage}
            errorMessage={errorMessage}
          ></ErrorMessageComponent>
        ))}
      </div>
    );
  }
}

export default InputImageComponent;
