import type { ComponentProps, FC } from "react";

export type CheckboxProps = Omit<ComponentProps<"input">, "type">;

export const Checkbox: FC<CheckboxProps> = (props) => (
  <input type="checkbox" {...props} />
);
