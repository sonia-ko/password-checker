import React from "react";
import classes from "./Form.module.css";
import PasswordInput from "./PasswordInput";

const Form: React.FC = () => {
  return (
    <form className={classes.container}>
      <h1>A typical password checker</h1>
      <PasswordInput />
    </form>
  );
};

export default Form;
