import "./TaskCard.scss";
import { useState } from "react";
import { editTask, TaskFormValues, removeTask, TaskType } from "../model";
import { TaskForm } from "./TaskForm";
import { TaskInfo } from "./TaskInfo";
import { Draggable } from "react-beautiful-dnd";
import { convertDateToMs, useAppDispatch } from "../../../shared";

type Props = {
  index: number;
  isEditable?: boolean;
} & TaskType;

export const TaskCard = ({ isEditable, index, ...task }: Props) => {
  const [isEditMode, setIsEditMode] = useState(task.id === 0);

  const dispatch = useAppDispatch();

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const removeTaskHandler = (id: number) => dispatch(removeTask({ id }));

  const onSubmit = ({ endDay, startDay, text }: TaskFormValues) => {
    dispatch(
      editTask({
        task: {
          endDay: convertDateToMs(endDay),
          id: task.id,
          startDay: convertDateToMs(startDay),
          text,
          type: task.type,
        },
      })
    );

    toggleEditMode();
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {({ dragHandleProps, draggableProps, innerRef }) => (
        <div
          className={"taskCard"}
          ref={innerRef}
          style={{ ...draggableProps.style }}
          {...draggableProps}
          {...dragHandleProps}
        >
          {isEditMode ? (
            <TaskForm
              onCrossClick={() => setIsEditMode(false)}
              onSubmit={onSubmit}
              removeTask={removeTaskHandler}
              {...task}
            />
          ) : (
            <TaskInfo
              isEditable={isEditable}
              toggleEditMode={toggleEditMode}
              removeTask={removeTaskHandler}
              {...task}
            />
          )}
        </div>
      )}
    </Draggable>
  );
};
