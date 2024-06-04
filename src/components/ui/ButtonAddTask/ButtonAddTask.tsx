import React from "react";
import Button from "@mui/material/Button";
import { useStyles } from "./useStyles";

type ButtonAddTaskProps = {
  onClick: () => void;
};
const ButtonAddTask: React.FC<ButtonAddTaskProps> = ({ onClick }) => {
  const styles = useStyles();

  return (
    <Button className={styles.btn} variant="text" onClick={onClick}>
      Add Task
    </Button>
  );
};

export default ButtonAddTask;
