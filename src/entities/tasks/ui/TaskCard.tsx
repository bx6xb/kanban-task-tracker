import "./TaskCard.scss";
import { useState } from "react";
import { TaskType } from "../model";
import { TaskForm } from "./TaskForm";
import { TaskInfo } from "./TaskInfo";

export type TaskCardProps = {
  isEditable?: boolean;
} & TaskType;

export const TaskCard = ({ isEditable, ...task }: TaskCardProps) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const onSubmit = () => toggleEditMode();

  return (
    <div className={"taskCard"}>
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
  );
};
