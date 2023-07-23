import React from "react";
import classes from "./PasswordInput.module.css";
import { useState } from "react";
import eyeIcon from "../../assets/eye-icon.png";

interface ProgressBarProps {
  enteredPassword: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<ProgressBarProps> = ({
  handleInputChange,
  enteredPassword,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const handleMouseDown = () => {
    setPasswordShown(true);
  };

  const handleMouseUp = () => {
    setPasswordShown(false);
  };

  return (
    <div>
      <p className={classes.label}>Please enter your password:</p>
      <div className={classes.inputContainer}>
        <input
          onChange={handleInputChange}
          value={enteredPassword}
          type={passwordShown ? "text" : "password"}
        />
        <button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          type="button"
          className={classes.icon}
        >
          <img className={classes.icon} src={eyeIcon} alt="Show password" />
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
