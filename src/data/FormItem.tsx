interface FormItem {
  name: string;

  bestBeforeDate: string;

  deliveryBy: string;

  cook: boolean | null;

  shouldBePackedYes: boolean;

  shouldBePackedNo: boolean;

  file: string;

  image: string;

  key: string;
}

export default FormItem;
