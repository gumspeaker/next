import { atom } from "jotai";
import { FormType } from "../types";

export const formData = atom<FormType>({
  form: [
    { filed_id: "111", field_name: "2222" },
    { filed_id: "222", field_name: "2222" },
    { filed_id: "333", field_name: "2222" },
    { filed_id: "444", field_name: "2222" },
  ],
});
