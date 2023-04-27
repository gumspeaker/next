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
import { useDrag } from "react-dnd";
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
      body: <Rating disabled max={3} />,
    },
  ];
  return (
    <Box className="w-1/4 flex-grow-0 h-full">
      <Box className="overflow-scroll min-h-full">
        <div className="w-full">
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
        </div>
      </Box>
    </Box>
  );
}

type Props = ComponentProps<typeof Paper> & {
  dragItem: DragItem;
  index: number;
};
const DragPaper: FC<Props> = (props) => {
  const { children, dragItem, index, ...rest } = props;
  const [collected, drag, dragPreview] = useDrag({});
  return (
    <div>
      <Paper {...rest}>{children}</Paper>
    </div>
  );
};
