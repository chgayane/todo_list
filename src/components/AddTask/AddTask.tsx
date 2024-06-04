import React, { useState, useContext } from "react";
import { CustomContext } from "../App/App";
import { useStyles } from "./useStyles";
import Input from "../ui/Input";
import Heading from "./../ui/Heading";
import ButtonAddTask from "../ui/ButtonAddTask";
import Box from "@mui/material/Box";

const AddTask = () => {
  const [inputValue, setInputValue] = useState("");
  const Context = useContext(CustomContext);
  const styles = useStyles();

  const handleClick = () => {
    Context?.addNewTask(inputValue);
    setInputValue("");
  };
  const handleInput = (e: string) => {
    setInputValue(e);
  };
  return (
    <Box className={styles.wrapper}>
      <Heading title="My Tasks" />
      <Box className={styles.box}>
        <Input onChange={handleInput} value={inputValue} />
        <ButtonAddTask onClick={handleClick} />
      </Box>
    </Box>
  );
};

export default AddTask;
