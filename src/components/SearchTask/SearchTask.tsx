import React, { useContext } from "react";
import Heading from "../ui/Heading";
import Input from "../ui/Input";
import Box from "@mui/material/Box";
import ButtonComp from "./../ui/ButtonComp";
import { useStyles } from "./useStyles";
import { CustomContext, TaskContext } from "../App/App";

const SearchTask = () => {
  const styles = useStyles();
  const Context = useContext(CustomContext);
  const taskContext = useContext(TaskContext);

  const handleClick = (name: string) => {
    Context?.filterTasks(name.toLowerCase());
  };
  return (
    <div>
      <Heading title="Search" />
      <Box className={styles.wrapper}>
        <Input onChange={taskContext?.setSearchText} />
        <ButtonComp name="All" onClick={handleClick} />
        <ButtonComp name="Important" onClick={handleClick} />
        <ButtonComp name="Done" onClick={handleClick} />
      </Box>
    </div>
  );
};

export default SearchTask;
