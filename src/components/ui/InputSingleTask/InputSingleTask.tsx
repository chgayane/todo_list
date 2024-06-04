import React from "react";
import TextField from "@mui/material/TextField";
import { useStyles } from "./useStyles";
import classNames from "classnames";

type InputTaskProps = {
  task: {
    name: string;
    id: number;
    important: boolean;
    done: boolean;
  };
  ref1: React.MutableRefObject<HTMLInputElement | null>;
  edited: boolean;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

const InputSingleTask: React.FC<InputTaskProps> = ({
  task,
  ref1,
  edited,
  onChange,
}) => {
  const styles = useStyles();
  const inputCn = classNames(styles.input, {
    [`${styles.important}`]: task.important,
    [`${styles.done}`]: task.done,
  });

  return (
    <TextField
      className={styles.input}
      defaultValue={task.name}
      size="small"
      variant="standard"
      InputProps={{
        readOnly: edited,
        disableUnderline: true,
        className: inputCn,
      }}
      inputRef={ref1}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputSingleTask;

// sx={{
//   input: {
//     color: "white",
//   },
//   width: 390,
//   backgroundColor: "#2f3d4e",
//   borderRadius: 6,
//   border: "none",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// }}
// size="small"
// variant="standard"
// InputProps={{
//   disableUnderline: true,
// }}
