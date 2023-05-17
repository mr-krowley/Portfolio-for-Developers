import React from "react";
import clsx from "clsx";

export const ListItem = ({ name, className }) => {
  return <li className={clsx("listitem", className)}>{name}</li>;
};
