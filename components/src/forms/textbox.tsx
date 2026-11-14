"use client";

import type { FC } from "react";
import type { PolymorphicProps } from "../lib/props.ts";
import styles from "./textbox.module.css";
import { merge } from "../lib/class-name.ts";
import { useInputProps } from "./form-control.ts";

interface TextboxOwnProps {
  className?: string;
}

export type TextboxProps = PolymorphicProps<"input", TextboxOwnProps>;

export const Textbox: FC<TextboxProps> = ({ className, ...props }) => {
  const inputProps = useInputProps();

  return (
    <input
      data-koi-component="textbox"
      type="textbox"
      className={merge(styles.textbox, className)}
      {...inputProps}
      {...props}
    />
  );
};
