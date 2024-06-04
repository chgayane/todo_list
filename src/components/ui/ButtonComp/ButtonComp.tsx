import React from "react";
import Button from "@mui/material/Button";
import { useStyles } from "./useStyles";

type ButtonCompProps = {
  name: string;
  onClick: (name: string) => void;
};

const ButtonComp: React.FC<ButtonCompProps> = ({ name, onClick }) => {
  const styles = useStyles();
  return (
    <Button
      variant="contained"
      size="small"
      className={styles.btn}
      onClick={() => onClick(name)}
    >
      {name}
    </Button>
  );
};

export default ButtonComp;
