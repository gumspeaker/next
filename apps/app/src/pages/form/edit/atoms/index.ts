import { atom } from "jotai";
import { FormType } from "../types";

export const formData = atom<FormType>({
  id: "",
  version: "",
  form: {},
});
