import React from "react";
import { useDraggable } from "@dnd-kit/core";
type Props = {
  element?: any;
  id: string;
  children: React.ReactNode;
};
function Draggable(props: Props) {
  const Element = props.element || "div";
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.id,
  });

  return (
    <Element ref={setNodeRef} {...listeners} {...attributes}>
      {props.children}
    </Element>
  );
}
