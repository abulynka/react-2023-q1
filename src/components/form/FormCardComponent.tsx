import React, { Component } from 'react';
import FormItem from '../../data/FormItem';
import './FormCardComponent.css';

class FormCardComponent extends Component<{ formItem: FormItem }> {
  public constructor(props: { formItem: FormItem }) {
    super(props);
  }

  public render() {
    const formItem = this.props.formItem;
    return (
      <section className="form-card">
        <h2 className="form-card__item">{formItem.name}</h2>

        <div className="form-card__item">
          <h4 className="form-card__item-name">Best Before Date:</h4>
          <div className="form-card__item-value">{formItem.bestBeforeDate}</div>
        </div>

        <div className="form-card__item">
          <h4 className="form-card__item-name">Delivery by:</h4>
          <div className="form-card__item-value">{formItem.deliveryBy}</div>
        </div>

        <div className="form-card__item">
          <h4 className="form-card__item-name">Should be cooked:</h4>
          <div className="form-card__item-value">{formItem.cook ? 'Yes' : 'No'}</div>
        </div>

        <div className="form-card__item">
          <h4 className="form-card__item-name">Should be packed:</h4>
          <div className="form-card__item-value">{formItem.shouldBePacked ? 'Yes' : 'No'}</div>
        </div>

        <div className="form-card__item">{formItem.file}</div>
      </section>
    );
  }
}

export default FormCardComponent;
