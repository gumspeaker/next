import { FC } from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  UseFormProps,
} from "react-hook-form";
import { Form } from "antd";

type defaultValues = Record<string, any>;
type RenderFormProps<VALUES extends defaultValues> = {
  onSubmit?: (v: VALUES) => void;
} & UseFormProps<VALUES, any>;

function noon() {}

export default function Wrapper<VALUES extends defaultValues>(
  props: RenderFormProps<VALUES>
) {
  const { onSubmit = noon, defaultValues } = props;
  const methods = useForm<VALUES>({ defaultValues });
  const submit = methods.handleSubmit(onSubmit);
  return (
    <FormProvider {...methods}>
      <App></App>
    </FormProvider>
  );
}

function App() {
  const methods = useFormContext();
  return <form onSubmit={methods.handleSubmit(() => {})}></form>;
}
