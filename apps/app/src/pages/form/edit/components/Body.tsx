import { FC } from "react";
import { Droppable } from "react-beautiful-dnd";
import {
  useForm,
  FormProvider,
  useFormContext,
  UseFormProps,
} from "react-hook-form";

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
  return (
    <FormProvider {...methods}>
      <Droppable droppableId="body">
        {() => {
          return <FormContainer></FormContainer>;
        }}
      </Droppable>
    </FormProvider>
  );
}

function FormContainer() {
  const methods = useFormContext();
  return <form onSubmit={methods.handleSubmit(() => {})}></form>;
}
