export type FormType = {
  id: string;
  version: string;
  form: {};
};
export type FormTypeField = {
  field_name: string;
};
export enum FormComponentEnum {
  INPUT = "input",
  SELECT = "select",
  CHECKBOX = "checkbox",
  DATE_PICKER = "date_picker",
}
