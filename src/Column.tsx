/** @format */
import React, { FC } from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";
type ColumnProps = {
  text: string;
} & {
  children?: React.ReactNode;
};
// both exports are similar expressions
// export const Column: FC<ColumnProps> = ({ text, children }) => {
export const Column = ({ text, children }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
      <button className="bg-blue-400 rounded p-2">A button</button>
    </ColumnContainer>
  );
};
