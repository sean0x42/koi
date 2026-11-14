import type { ComponentProps, FC } from "react";

export type TextboxProps = Omit<ComponentProps<"input">, "type">;

export const Textbox: FC<TextboxProps> = (props) => (
  <input type="text" {...props} />
);
