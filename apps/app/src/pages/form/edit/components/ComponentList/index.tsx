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
import { Draggable } from "react-beautiful-dnd";
type DragItem = {
  type: string;
  body: React.ReactNode;
};
export default function Home() {
  const list: DragItem[] = [
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
      body: <Rating max={3} />,
    },
  ];
  return (
    <div className="w-1/3 flex-grow-0">
      <Box className="flex flex-wrap overflow-scroll max-h-full">
        {list.map((dragItem, index) => (
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
      </Box>
    </div>
  );
}

type Props = ComponentProps<typeof Paper> & {
  key: string;
  dragItem: DragItem;
  index: number;
};
const DragPaper: FC<Props> = (props) => {
  const { key, children, dragItem, index, ...rest } = props;
  return (
    <Draggable index={index} draggableId={dragItem.type}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Paper {...rest}>{children}</Paper>
          </div>
        );
      }}
    </Draggable>
  );
};
