import React from "react";
import classes from "./Form.module.css";
import PasswordChecker from "../PasswordChecker/PasswordChecker";

const Form: React.FC = () => {
  return (
    <form className={classes.container}>
      <h1>A typical password checker</h1>
      <PasswordChecker />
    </form>
  );
};

export default Form;
