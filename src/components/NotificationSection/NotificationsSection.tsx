import React from "react";
import classes from "./NotificationSection.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import NotificationMessage from "../NotificationMessage/NotificationMessage";

interface NotificationSectionProps {
  letters: boolean;
  numbers: boolean;
  symbols: boolean;
  password: string;
  level: "strong" | "easy" | "medium";
}

type PossibleClasses = "empty" | "short" | "strong" | "easy" | "medium";

const NotificationSection: React.FC<NotificationSectionProps> = ({
  letters,
  numbers,
  symbols,
  password,
  level,
}) => {
  const passwordEmpty = password.length === 0;
  const passwordTooShort = password.length < 8;

  const generateClass = (): PossibleClasses => {
    if (passwordEmpty) {
      return "empty";
    }

    if (passwordTooShort) {
      return "short";
    }

    return level;
  };

  const passwordLevel = generateClass();

  return (
    <>
      <NotificationMessage passwordLevel={passwordLevel} />
      <ProgressBar progress={passwordLevel} />
      <div className={classes[passwordLevel]}>
        <ul className={classes.ul}>
          <li>Password should not contain only letters / digits / symbols</li>
          <li>Password length: at least 8 characters</li>
          <li>
            <ul>
              <li> {letters ? "✅" : "❌"} Letters</li>
              <li> {numbers ? "✅" : "❌"} Numbers </li>
              <li> {symbols ? "✅" : "❌"} Special symbols </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NotificationSection;
