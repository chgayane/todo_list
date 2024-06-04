import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  btn: {
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    color: "#d1acb9",
    maxWidth: 100,
    height: 30,
    fontSize: 12,
  },
  edit: {
    color: "#8b6c79",
  },
  important: {
    color: "#6a4f95",
  },
  done: {
    color: "#4d7a6a",
  },
  delete: {
    color: "#7d4c46",
  },
});

// sx={{
//   input: {
//     color: "white",
//   },
//   width: 390,
//   backgroundColor: "transparent",
//   // borderRadius: 6,
//   border: "none",
//   display: "flex",
//   justifyContent: "center",
//   paddingLeft: "7px",
// }}
