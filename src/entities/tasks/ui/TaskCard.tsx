import "./TaskCard.scss";
import { useState } from "react";
import { TaskType } from "../model";
import { TaskForm } from "./TaskForm";
import { TaskInfo } from "./TaskInfo";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  index: number;
  isEditable?: boolean;
} & TaskType;

export const TaskCard = ({ isEditable, index, ...task }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const onSubmit = () => toggleEditMode();

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {({ dragHandleProps, draggableProps, innerRef }) => (
        <div
          className={"taskCard"}
          ref={innerRef}
          {...draggableProps}
          {...dragHandleProps}
          style={{ ...draggableProps.style }}
        >
          {isEditMode ? (
            <TaskForm
              onCrossClick={() => setIsEditMode(false)}
              onSubmit={onSubmit}
              {...task}
            />
          ) : (
            <TaskInfo
              isEditable={isEditable}
              toggleEditMode={toggleEditMode}
              {...task}
            />
          )}
        </div>
      )}
    </Draggable>
  );
};
