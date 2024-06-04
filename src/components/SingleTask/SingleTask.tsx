import React, { useState, useContext, useRef } from "react";
import ButtonSingleTask from "../ui/ButtonSingleTask";
import InputSingleTask from "../ui/InputSingleTask";
import Box from "@mui/material/Box";
import { useStyles } from "./useStyles";
import { TaskContext } from "../App/App";

type SingleTaskProps = {
  task: {
    name: string;
    id: number;
    important: boolean;
    done: boolean;
  };
};

const SingleTask: React.FC<SingleTaskProps> = ({ task }) => {
  const styles = useStyles();
  const Context = useContext(TaskContext);
  const [edited, setEdited] = useState(true);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [newTask, setTask] = useState("");

  const handleEdit = () => {
    inputRef.current?.focus();
    setEdited(!edited);
    !edited && Context?.handleEdit(task.id, newTask);
  };

  const handleImp = () => {
    Context?.handleImportant(task.id);
  };
  const handleDone = () => {
    Context?.handleDone(task.id);
  };
  const handelDel = () => {
    Context?.handleDelete(task.id);
  };

  return (
    <Box className={styles.wrapper}>
      <InputSingleTask
        task={task}
        ref1={inputRef}
        edited={edited}
        onChange={setTask}
      />
      <ButtonSingleTask
        name={edited ? "Edit" : "Save"}
        cn="edit"
        onClick={handleEdit}
      />
      <ButtonSingleTask name="Important" cn="important" onClick={handleImp} />
      <ButtonSingleTask name="Done" cn="done" onClick={handleDone} />
      <ButtonSingleTask name="Delete" cn="delete" onClick={handelDel} />
    </Box>
  );
};

export default SingleTask;
