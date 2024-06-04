import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useStyles } from "./useStyles";

type HeadingProps = {
  title: string;
};
const Heading: React.FC<HeadingProps> = ({ title }) => {
  const styles = useStyles();
  return (
    <Grid className={styles.wrapper}>
      <Typography
        className={styles.type}
        align="center"
        variant="h5"
        gutterBottom
        component="div"
      >
        {title}
      </Typography>

      <Grid className={styles.grid} />
    </Grid>
  );
};

export default Heading;
