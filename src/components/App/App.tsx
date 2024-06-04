import React, { useState } from "react";
import AddTask from "../AddTask";
import Box from "@mui/material/Box";
import SearchTask from "../SearchTask";
import Tasks from "../Tasks";
import { useStyles } from "./useStyles";

type stateType = {
  tasks: {
    name: string;
    id: number;
    important: boolean;
    done: boolean;
    delete: boolean;
  }[];
  done: boolean;
  important: boolean;
};

export type ContextType = {
  state: stateType;
  setState: React.Dispatch<React.SetStateAction<stateType>>;
  addNewTask: (taskName: string) => void;
  filterTasks: (status: string) => void;
};
export type TaskContextType = {
  handleEdit: (id: number, newName: string) => void;
  handleImportant: (id: number) => void;
  handleDone: (id: number) => void;
  handleDelete: (id: number) => void;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
};

export const CustomContext = React.createContext<ContextType | null>(null);
export const TaskContext = React.createContext<TaskContextType | null>(null);

function App() {
  const styles = useStyles();
  const [searchText, setSearchText] = useState("");
  const [state, setState] = useState<stateType>({
    tasks: [],
    important: false,
    done: false,
  });

  const addNewTask = (taskName: string) => {
    taskName &&
      setState({
        ...state,
        tasks: [
          ...state.tasks,
          {
            name: taskName,
            important: false,
            done: false,
            delete: false,
            id: state.tasks.length + 1,
          },
        ],
      });
  };

  const handleEdit = (id: number, newName: string) => {
    const newState = state.tasks.map((task) => {
      task.id === id && (task.name = newName);
      return task;
    });
    setState({ ...state, tasks: newState });
  };
  const handleImportant = (id: number) => {
    const newState = state.tasks.map((task) => {
      task.id === id && (task.important = !task.important);
      return task;
    });
    setState({ ...state, tasks: newState });
  };

  const handleDone = (id: number) => {
    const newState = state.tasks.map((task) => {
      task.id === id && (task.done = !task.done);
      return task;
    });
    setState({ ...state, tasks: newState });
  };
  const handleDelete = (id: number) => {
    const newState = state.tasks.filter((task) => task.id !== id);
    setState({ ...state, tasks: newState });
  };

  const filterTasks = (status: string) => {
    status === "important" &&
      setState({
        ...state,
        important: true,
        done: false,
      });

    status === "done" &&
      setState({
        ...state,
        important: false,
        done: true,
      });

    status === "all" &&
      setState({
        ...state,
        important: false,
        done: false,
      });
  };

  return (
    <CustomContext.Provider
      value={{ state, addNewTask, setState, filterTasks }}
    >
      <TaskContext.Provider
        value={{
          handleEdit,
          handleImportant,
          handleDone,
          handleDelete,
          setSearchText,
          searchText,
        }}
      >
        <Box className={styles.wrapper}>
          <AddTask />
          <SearchTask />
          <Tasks />
        </Box>
      </TaskContext.Provider>
    </CustomContext.Provider>
  );
}

export default App;
