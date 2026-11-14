import type { FC } from "react";
import type { PolymorphicProps } from "../lib/props.ts";
import styles from "./heading.module.css";

export interface HeadingOwnProps {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "left" | "center" | "right";
  variant?: "default" | "title";
}

export type HeadingProps = PolymorphicProps<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  HeadingOwnProps
>;

export const Heading: FC<HeadingProps> = ({
  size,
  align = "left",
  variant = "default",
  as: Component = `h${size}`,
  children,
}) => (
  <Component
    data-koi-component="heading"
    className={styles.heading}
    data-size={size}
    data-align={align}
    data-variant={variant}
  >
    {children}
  </Component>
);
