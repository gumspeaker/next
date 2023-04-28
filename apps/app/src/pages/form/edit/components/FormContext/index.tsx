import { useDroppable } from "@dnd-kit/core";
import { useAtom } from "jotai";
import { FC } from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  UseFormProps,
} from "react-hook-form";
import { formData } from "../../atoms";
import DraggableItem from "./DraggableItem";
import { SortableContext } from "@dnd-kit/sortable";
import { comList } from "../ComponentList";

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
      <FormContainer></FormContainer>
    </FormProvider>
  );
}

function FormContainer() {
  const methods = useFormContext();
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style = {
    color: isOver ? "green" : undefined,
    width: 500,
    background: "white",
  };
  const [formValue] = useAtom(formData);
  return (
    <form onSubmit={methods.handleSubmit(() => {})}>
      <div ref={setNodeRef} style={style} className="h-full">
        <SortableContext
          items={[
            ...formValue.form.map((f) => f.filed_id),
            ...comList.map((c) => c.type),
          ]}
        >
          {formValue.form.map((item) => (
            <DraggableItem data={item} key={item.filed_id}></DraggableItem>
          ))}
        </SortableContext>
      </div>
    </form>
  );
}
