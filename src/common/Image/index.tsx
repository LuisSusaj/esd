import { ImageProps } from "../types";

export const Image = ({ src, width, height }: ImageProps) => {
  return (
    <img
      src={`/img/${src}`}
      alt={src}
      width={width}
      height={height}
      style={{ borderRadius: "6px" }}
    />
  );
};
