import {
  Box,
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Rating,
} from "@mui/material";
import style from "./index.module.scss";
import React, { FC, ComponentProps } from "react";
import { ComponentDragArea } from "../../index.page";
import { useDraggable, useDroppable } from "@dnd-kit/core";
type DragItem = {
  type: string;
  body: React.ReactNode;
};

export const comList: DragItem[] = [
  {
    type: "button",
    body: (
      <Button disabled variant="outlined">
        button
      </Button>
    ),
  },
  {
    type: "RadioGroup",
    body: (
      <RadioGroup>
        <FormControlLabel
          disabled
          value="radio"
          control={<Radio />}
          label="radio"
        />
      </RadioGroup>
    ),
  },
  {
    type: "Rating",
    body: <Rating disabled max={3} />,
  },
];
export default function Home() {
  const { isOver, setNodeRef } = useDroppable({
    id: "list",
  });
  const css = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div className="w-1/4 flex-grow-0 h-full">
      <div className="overflow-scroll-y min-h-full w-full">
        <div className="w-full" style={css} ref={setNodeRef}>
          {comList.map((dragItem, index) => (
            <DragPaper
              index={index}
              dragItem={dragItem}
              key={dragItem.type}
              className={`${style.paper} flex justify-center items-center`}
              elevation={1}
            >
              {dragItem.body}
            </DragPaper>
          ))}
        </div>
      </div>
    </div>
  );
}

type Props = ComponentProps<typeof Paper> & {
  dragItem: DragItem;
  index: number;
};
const DragPaper: FC<Props> = (props) => {
  const { children, dragItem, index, ...rest } = props;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: dragItem.type,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <>
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <Paper {...rest}>{children}</Paper>
      </div>
    </>
  );
};
