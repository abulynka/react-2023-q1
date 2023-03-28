import React, { Component } from 'react';
import FormItem from '../../data/FormItem';
import FormCardComponent from './FormCardComponent';
import './FormCardListComponent.css';

class FormCardListComponent extends Component<{ formItems: FormItem[] }> {
  public constructor(props: { formItems: FormItem[] }) {
    super(props);
    this.state = {
      formItems: props.formItems,
    };
  }

  public render() {
    return (
      <div className="form-card-list">
        {this.props.formItems.map((formItem: FormItem) => (
          <FormCardComponent key={formItem.key} formItem={formItem}></FormCardComponent>
        ))}
      </div>
    );
  }
}

export default FormCardListComponent;
