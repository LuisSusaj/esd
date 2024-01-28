import { TFunction } from "react-i18next";
import { Dispatch, SetStateAction } from "react";

export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  color?: string;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface UseFetchRequestProps {
  url: string;
  method?: "get" | "post" | "patch" | "post" | "delete" | "put";
  params?: object;
  data?: object;
  headers?: object;
}
export interface UseFetchResponseProps extends UseFetchRequestProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setResponse: Dispatch<SetStateAction<any>>;
  setError: Dispatch<SetStateAction<any>>;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export interface ImageProps {
  src: string;
  width: string;
  height: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  t: TFunction;
  type?: string;
  value?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}
export interface validateProps {
  name: string;
  message: string;
  email: string;
}
