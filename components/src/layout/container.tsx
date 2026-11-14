import type { ElementType } from "react";
import type { PolymorphicProps } from "../lib/props.ts";
import styles from "./container.module.css";
import { Box, type BoxOwnProps, type BoxProps } from "./box.ts";
import { merge } from "../lib/class-name.ts";

interface ContainerOwnProps extends BoxOwnProps {
  width?: "default" | "prose";
}

export type ContainerProps<C extends ElementType = "div"> = PolymorphicProps<
  C,
  ContainerOwnProps
>;

export function Container<C extends ElementType = "div">({
  width = "default",
  className,
  ...props
}: ContainerProps<C>) {
  return (
    <Box<C>
      data-koi-component="container"
      className={merge(styles.container, className)}
      data-width={width}
      paddingHorizontal={5}
      {...(props as BoxProps<C>)}
    />
  );
}
