import { TFunction } from "react-i18next";
export interface CollaboratorsBlockProps {
  title: string;
  content: string;
  section?: {
    title: string;
    icon: string;
  }[];
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
  direction: "left" | "right";
  founder?: string;
  message?: string;
}
