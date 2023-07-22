import React from "react";
import classes from "./PasswordInput.module.css";
import { useState } from "react";
import checkPasswordStrength from "../helpers/checkPasswordStrength";
import NotificationSection from "./NotificationsSection";

const PasswordInput: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [strength, setStrength] = useState<PasswordStrength>("easy");
  const [containsLetters, setContainsLetters] = useState(false);
  const [containsNumbers, setContainsNumbers] = useState(false);
  const [containsSymbols, setContainsSymbols] = useState(false);
  const [copyNotification, setCopyNotification] = useState(false);

  type PasswordStrength = "strong" | "medium" | "easy";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
    const pwdStrength = checkPasswordStrength(event.target.value);
    setStrength(pwdStrength.level);
    setContainsLetters(pwdStrength.contains.letters);
    setContainsNumbers(pwdStrength.contains.numbers);
    setContainsSymbols(pwdStrength.contains.symbols);
  };

  const handleMouseDown = () => {
    setPasswordShown(true);
  };

  const handleMouseUp = () => {
    setPasswordShown(false);
  };

  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText(enteredPassword);
      setCopyNotification(true);
      setTimeout(() => setCopyNotification(false), 2000);
    } catch (err) {
      console.error("Failed to copy password:", err);
    }
  };

  return (
    <div className={classes.container}>
      <label>Please enter your password:</label>
      <input
        onChange={handleInputChange}
        value={enteredPassword}
        type={passwordShown ? "text" : "password"}
      />
      <p className={classes.p}>
        Password strength: {enteredPassword.length < 8 ? "Too short" : strength}
      </p>
      <p className={classes.p}>
        {copyNotification ? "Password copied to clipboard" : " "}
      </p>
      <button
        disabled={enteredPassword.length < 8}
        type="button"
        onClick={handleCopyPassword}
      >
        Copy Password
      </button>
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        type="button"
      >
        {passwordShown ? "Hide" : "Show"} password
      </button>
      <NotificationSection
        letters={containsLetters}
        numbers={containsNumbers}
        symbols={containsSymbols}
        password={enteredPassword}
        level={strength}
      />
    </div>
  );
};

export default PasswordInput;
