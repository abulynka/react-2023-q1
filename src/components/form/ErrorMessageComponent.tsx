import React, { Component } from 'react';
import './ErrorMessageComponent.css';

class ErrorMessageComponent extends Component<{ errorMessage: string }> {
  public render() {
    return <div className="error-message">*{this.props.errorMessage}</div>;
  }
}

export default ErrorMessageComponent;
