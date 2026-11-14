import type { ElementType } from "react";
import type { PolymorphicProps } from "./lib/props.ts";
import { merge } from "./lib/class-name.ts";
import styles from "./button.module.css";

interface ButtonOwnProps {
  className?: string;
}

export type ButtonProps<C extends ElementType = "button"> = PolymorphicProps<
  C,
  ButtonOwnProps
>;

export function Button<C extends ElementType = "button">({
  as,
  className,
  ...props
}: ButtonProps<C>) {
  const Element = as ?? "button";

  return (
    <Element
      data-koi-component="button"
      className={merge(styles.button, className)}
      {...props}
    />
  );
}
