import React from "react";
import classes from "./NotificationMessage.module.css";

interface NotificationMessageProps {
  passwordLevel: "short" | "empty" | "easy" | "medium" | "strong";
}

const NotificationMessage: React.FC<NotificationMessageProps> = ({
  passwordLevel,
}) => {
  let customMessage;
  if (passwordLevel === "short") {
    customMessage = "Your password is too short";
  }
  if (passwordLevel === "empty") {
    customMessage = "Start typing your password";
  }

  return (
    <p className={classes.p}>
      {customMessage ? customMessage : `Password strength: ${passwordLevel}`}
    </p>
  );
};

export default NotificationMessage;
