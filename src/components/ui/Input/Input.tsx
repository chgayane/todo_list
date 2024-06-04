import React from "react";
import TextField from "@mui/material/TextField";

type InputProps = {
  onChange?: (e: string) => void;
  value?: string;
};
const Input: React.FC<InputProps> = ({ onChange, value }) => {
  return (
    <TextField
      sx={{
        input: {
          color: "white",
        },
        width: 390,
        height: 30,
        backgroundColor: "#2f3d4e",
        borderRadius: 6,
        border: "none",
        display: "flex",
        justifyContent: "center",
        paddingLeft: "7px",
      }}
      size="small"
      variant="standard"
      InputProps={{
        disableUnderline: true,
      }}
      onChange={(e) => onChange && onChange(e.target.value)}
      value = {value}
    />
  );
};

export default Input;
