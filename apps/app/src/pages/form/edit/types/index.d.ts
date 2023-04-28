export type FormType = {
  form: FormField[];
};
export type FormField = {
  field_name: string;
  filed_id: string;
};
export enum FormComponentEnum {
  INPUT = "input",
  SELECT = "select",
  CHECKBOX = "checkbox",
  DATE_PICKER = "date_picker",
}
