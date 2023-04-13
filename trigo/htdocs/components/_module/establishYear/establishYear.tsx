import { FC } from "react";

export const EstablishYear: FC = () => {
  const year: number = new Date().getFullYear() - 1985;

  return <span>{year}</span>;
};
