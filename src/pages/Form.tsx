import React, { Component, createRef } from 'react';
import './Form.css';
import FormCardListComponent from '../components/form/FormCardListComponent';
import FormItem from '../data/FormItem';
import InputComponent from '../components/form/input/InputComponent';
import { ErrorMessages } from '../components/form/ErrorMessages';
import InputDateComponent from '../components/form/inputDate/InputDateComponent';
import SelectComponent from '../components/form/select/SelectComponent';
import InputCheckboxComponent from '../components/form/inputCheckbox/InputCheckboxComponent';
import InputRadioYNComponent from '../components/form/inputRadioYN/InputRadioYNComponent';
import InputImageComponent from '../components/form/inputImage/InputImageComponent';

interface FormItemElement {
  base: React.RefObject<HTMLFormElement>;

  name: React.RefObject<HTMLInputElement>;

  bestBeforeDate: React.RefObject<HTMLInputElement>;

  deliveryBy: React.RefObject<HTMLSelectElement>;

  cook: React.RefObject<HTMLInputElement>;

  shouldBePackedYes: React.RefObject<HTMLInputElement>;

  shouldBePackedNo: React.RefObject<HTMLInputElement>;

  file: React.RefObject<HTMLInputElement>;
}

interface FormState {
  formItems: FormItem[];

  name: {
    errorMessages: string[];
  };

  bestBeforeDate: {
    errorMessages: string[];
  };

  deliveryBy: {
    errorMessages: string[];
  };

  cook: {
    errorMessages: string[];
  };

  shouldBePacked: {
    errorMessages: string[];
  };

  file: {
    errorMessages: string[];
  };
}

class Form extends Component<object, FormState> {
  private formItem: FormItemElement = {} as FormItemElement;

  public constructor(props: Record<string, string[]>) {
    super(props);

    this.state = {
      formItems: [],
      name: {
        errorMessages: [],
      },
      bestBeforeDate: {
        errorMessages: [],
      },
      deliveryBy: {
        errorMessages: [],
      },
      cook: {
        errorMessages: [],
      },
      shouldBePacked: {
        errorMessages: [],
      },
      file: {
        errorMessages: [],
      },
    };
  }

  private validateRequired(value: string, messages: string[]) {
    if (value === '') {
      messages.push(ErrorMessages.REQUIRED);
    }
  }

  private validateName(value: string): string[] {
    const messages: string[] = [];

    this.validateRequired(value, messages);

    return messages;
  }

  private validatebestBeforeDate(value: string): string[] {
    const messages: string[] = [];

    this.validateRequired(value, messages);

    return messages;
  }

  private validateDeliveryBy(value: string): string[] {
    const messages: string[] = [];

    this.validateRequired(value, messages);

    return messages;
  }

  private validateCook() {
    const messages: string[] = [];

    return messages;
  }

  private validateShouldBePacked(valueYes: boolean, valueNo: boolean): string[] {
    const messages: string[] = [];

    if (!valueYes && !valueNo) {
      messages.push(ErrorMessages.REQUIRED);
    }

    return messages;
  }

  private validateFile(value: string): string[] {
    const messages: string[] = [];

    this.validateRequired(value, messages);

    return messages;
  }

  public submit = (e: React.FormEvent) => {
    e.preventDefault();

    const formItem: FormItem = {} as FormItem;
    formItem.name = this.formItem.name.current?.value || '';
    formItem.bestBeforeDate = this.formItem.bestBeforeDate.current?.value || '';
    formItem.deliveryBy = this.formItem.deliveryBy.current?.value || '';
    formItem.cook = this.formItem.cook.current?.checked || null;
    formItem.shouldBePackedYes = this.formItem.shouldBePackedYes.current?.checked || false;
    formItem.shouldBePackedNo = this.formItem.shouldBePackedNo.current?.checked || false;
    formItem.file = this.formItem.file.current?.value || '';
    formItem.files = this.formItem.file.current?.files;

    const errorMessages = {
      name: {
        errorMessages: this.validateName(formItem.name),
      },
      bestBeforeDate: {
        errorMessages: this.validatebestBeforeDate(formItem.bestBeforeDate),
      },
      deliveryBy: {
        errorMessages: this.validateDeliveryBy(formItem.deliveryBy),
      },
      cook: {
        errorMessages: this.validateCook(),
      },
      shouldBePacked: {
        errorMessages: this.validateShouldBePacked(
          formItem.shouldBePackedYes,
          formItem.shouldBePackedNo
        ),
      },
      file: {
        errorMessages: this.validateFile(formItem.file),
      },
    };

    const formItems: FormItem[] = this.state.formItems;
    if (
      errorMessages.name.errorMessages.length === 0 &&
      errorMessages.bestBeforeDate.errorMessages.length === 0 &&
      errorMessages.deliveryBy.errorMessages.length === 0 &&
      errorMessages.cook.errorMessages.length === 0 &&
      errorMessages.shouldBePacked.errorMessages.length === 0 &&
      errorMessages.file.errorMessages.length === 0
    ) {
      formItems.push(formItem);
      alert('The data has been saved!');
      this.formItem.base.current?.reset();
    }

    this.setState({
      formItems: formItems,
      ...errorMessages,
    });
  };

  public render(): JSX.Element {
    this.formItem.base = createRef<HTMLFormElement>();

    this.formItem.name = createRef<HTMLInputElement>();
    this.formItem.bestBeforeDate = createRef<HTMLInputElement>();
    this.formItem.deliveryBy = createRef<HTMLSelectElement>();
    this.formItem.cook = createRef<HTMLInputElement>();
    this.formItem.shouldBePackedYes = createRef<HTMLInputElement>();
    this.formItem.shouldBePackedNo = createRef<HTMLInputElement>();
    this.formItem.file = createRef<HTMLInputElement>();

    return (
      <div className="form">
        <form className="form__container" onSubmit={this.submit} ref={this.formItem.base}>
          <InputComponent
            refObject={this.formItem.name}
            name={'Name'}
            errorMessages={this.state.name.errorMessages}
          ></InputComponent>

          <InputDateComponent
            refObject={this.formItem.bestBeforeDate}
            name="Best Before Date"
            errorMessages={this.state.bestBeforeDate.errorMessages}
          ></InputDateComponent>

          <SelectComponent
            refObject={this.formItem.deliveryBy}
            name={'Delivery by'}
            options={['Today', 'Tomorrow', 'After Tomorrow']}
            errorMessages={this.state.deliveryBy.errorMessages}
          ></SelectComponent>

          <InputCheckboxComponent
            refObject={this.formItem.cook}
            name={'Cook'}
            title={'Choose extra feature'}
            errorMessages={this.state.cook.errorMessages}
          ></InputCheckboxComponent>

          <InputRadioYNComponent
            refObjectYes={this.formItem.shouldBePackedYes}
            refObjectNo={this.formItem.shouldBePackedNo}
            name={'packed'}
            title={'Should be packed'}
            errorMessages={this.state.shouldBePacked.errorMessages}
          ></InputRadioYNComponent>

          <InputImageComponent
            refObject={this.formItem.file}
            name={'File'}
            errorMessages={this.state.file.errorMessages}
          ></InputImageComponent>

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
