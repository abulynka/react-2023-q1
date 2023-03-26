interface FormItem {
  name: string;

  bestBeforeDate: string;

  deliveryBy: string;

  cook: boolean | null;

  shouldBePackedYes: boolean;

  shouldBePackedNo: boolean;

  file: string;

  files: FileList | null | undefined;
}

export default FormItem;
