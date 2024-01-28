import { TFunction } from "react-i18next";
export interface ContentBlockUpAndDownProps {
  icon: string;
  title: string;
  content: string;
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "up" | "down";
  founder?: string;
  message?: string;
}
