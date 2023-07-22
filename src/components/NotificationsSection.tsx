import React from "react";
import classes from "./NotificationSection.module.css";

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

  return (
    <div className={classes[generateClass()]}>
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
  );
};

export default NotificationSection;
