import { FC } from "react";

export const CurrentYear: FC = () => {
  const year: number = new Date().getFullYear();

  return <span>{year}</span>;
};
