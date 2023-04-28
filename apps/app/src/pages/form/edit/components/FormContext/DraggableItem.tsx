import { FC } from "react";
import { FormField } from "../../types";
import { useDraggable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
type props = {
  data: FormField;
};
const DraggableItem: FC<props> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.data.filed_id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="w-12 h-12 m-4" style={{ background: "red" }}></div>
    </div>
  );
};
export default DraggableItem;
