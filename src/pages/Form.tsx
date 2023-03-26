import React, { Component } from 'react';
import './Form.css';
import FormCardListComponent from '../components/form/FormCardListComponent';
import FormItem from '../data/FormItem';

interface FormItemElement {
  name: HTMLInputElement;
  bestBeforeDate: HTMLInputElement;

  deliveryBy: HTMLSelectElement;

  cook: HTMLInputElement;

  shouldBePackedYes: HTMLInputElement;

  shouldBePackedNo: HTMLInputElement;

  file: HTMLInputElement;
}

class Form extends Component<object, Record<string, FormItem[]>> {
  private formItem: FormItemElement = {} as FormItemElement;

  public constructor(props: Record<string, string[]>) {
    super(props);

    this.state = {
      formItems: [],
    };
  }

  public submit = (e: React.FormEvent) => {
    e.preventDefault();

    // const formItem: FormItem = {} as FormItem;
    // formItem.name = this.formItem.name.value;
    // formItem.bestBeforeDate = this.formItem.bestBeforeDate.value;
    // formItem.deliveryBy = this.formItem.deliveryBy.value;
    // formItem.cook = this.formItem.cook.checked;
    // formItem.shouldBePacked = this.formItem.shouldBePackedYes.checked;
    // formItem.file = this.formItem.file.value;

    const formItem: FormItem = {
      bestBeforeDate: '2023-03-21',
      cook: true,
      deliveryBy: 'Tomorrow',
      file: 'C:\fakepath\batman.png',
      name: 'Test',
      shouldBePacked: true,
    };

    this.setState({
      formItems: [formItem, ...this.state.formItems],
    });
  };

  public render(): JSX.Element {
    return (
      <div className="form">
        <form className="form__container" onSubmit={this.submit}>
          <label className="form__item">
            Name:
            <input
              type="string"
              className="form__item-control"
              ref={(input: HTMLInputElement) => {
                this.formItem.name = input;
              }}
            ></input>
          </label>

          <label className="form__item">
            Best Before Date:
            <input
              type="date"
              className="form__item-control"
              ref={(input: HTMLInputElement) => {
                this.formItem.bestBeforeDate = input;
              }}
            ></input>
          </label>

          <label className="form__item">
            Delivery by:
            <select
              className="form__item-control"
              ref={(input: HTMLSelectElement) => {
                this.formItem.deliveryBy = input;
              }}
            >
              <option>Today</option>
              <option>Tomorrow</option>
              <option>After Tomorrow</option>
            </select>
          </label>

          <fieldset className="form__item">
            <legend>Choose extra feature:</legend>
            <div>
              <input
                type="checkbox"
                id="cook"
                name="cook"
                ref={(input: HTMLInputElement) => {
                  this.formItem.cook = input;
                }}
              />
              <label htmlFor="cook">Cook</label>
            </div>
          </fieldset>

          <fieldset className="form__item">
            <legend>Should be packed:</legend>
            <div>
              <input
                type="radio"
                id="packed-yes"
                name="packed"
                value="packed-yes"
                ref={(input: HTMLInputElement) => {
                  this.formItem.shouldBePackedYes = input;
                }}
              ></input>
              <label htmlFor="packed-yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                id="packed-no"
                name="packed"
                value="packed-no"
                ref={(input: HTMLInputElement) => {
                  this.formItem.shouldBePackedNo = input;
                }}
              ></input>
              <label htmlFor="packed-no">No</label>
            </div>
          </fieldset>

          <label className="form__item">
            File:
            <input
              type="file"
              accept="image/*"
              ref={(input: HTMLInputElement) => {
                this.formItem.file = input;
              }}
            ></input>
          </label>

          <div className="form__item">
            <input type="submit" value="Submit" />
          </div>
        </form>
        <FormCardListComponent formItems={this.state.formItems}></FormCardListComponent>
      </div>
    );
  }
}

export default Form;
