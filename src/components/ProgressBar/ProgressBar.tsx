import React from "react";
import classes from "./ProgressBar.module.css";

interface ProgressBarProps {
  progress: "short" | "empty" | "easy" | "medium" | "strong";
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className={`${classes.container} ${classes[progress]}`}>
      <div className={classes.section}></div>
      <div className={classes.section}></div>
      <div className={classes.section}></div>
    </div>
  );
};

export default ProgressBar;
