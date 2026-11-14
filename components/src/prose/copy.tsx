import type { FC } from "react";
import type { PolymorphicProps } from "../lib/props.ts";
import styles from "./copy.module.css";
import { merge } from "../lib/class-name.ts";

interface CopyOwnProps {
  className?: string;
  align?: "left" | "center" | "right";
  size?: "default" | "large";
}

export type CopyProps = PolymorphicProps<"p", CopyOwnProps>;

export const Copy: FC<CopyProps> = ({
  className,
  align = "left",
  size = "default",
  ...props
}) => (
  <p
    data-koi-component="copy"
    data-align={align}
    data-size={size}
    className={merge(styles.copy, className)}
    {...props}
  />
);

interface BoldOwnProps {
  className?: string;
}

export type BoldProps = PolymorphicProps<"strong", BoldOwnProps>;

export const Bold: FC<BoldProps> = ({ className, ...props }) => (
  <strong
    data-koi-component="bold"
    className={merge(styles.bold, className)}
    {...props}
  />
);

interface ItalicOwnProps {
  className?: string;
}

export type ItalicProps = PolymorphicProps<"strong", ItalicOwnProps>;

export const Italic: FC<ItalicProps> = ({ className, ...props }) => (
  <em
    data-koi-component="italic"
    className={merge(styles.italic, className)}
    {...props}
  />
);
