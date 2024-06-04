import React from "react";
import Button from "@mui/material/Button";
import { useStyles } from "./useStyles";
type ButtonProps = {
  name: string;
  cn: string;
  onClick: () => void;
};
const ButtonSingleTask: React.FC<ButtonProps> = ({ name, cn, onClick }) => {
  const styles: { [key: string]: string } = useStyles();

  return (
    <Button
      className={(styles.btn, styles[cn])}
      variant="text"
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default ButtonSingleTask;
