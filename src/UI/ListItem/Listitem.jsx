import React from "react";

export const ListItem = ({ content, className }) => {
  return <li className={clsx("listitem", className)}>{content}</li>;
};
