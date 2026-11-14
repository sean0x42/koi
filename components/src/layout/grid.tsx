import type { ElementType } from "react";
import type { PolymorphicProps } from "../lib/props.ts";
import styles from "./grid.module.css";
import { Box, type BoxOwnProps, type BoxProps } from "./box.ts";
import { merge } from "../lib/class-name.ts";

interface GridOwnProps extends BoxOwnProps {
  columns: number;
}

export type GridProps<C extends ElementType = "div"> = PolymorphicProps<
  C,
  GridOwnProps
>;

export function Grid<C extends ElementType = "div">({
  className,
  columns,
  ...boxProps
}: GridProps<C>) {
  return (
    <Box<C>
      data-koi-component="grid"
      data-columns={columns}
      className={merge(styles.grid, className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
      {...(boxProps as BoxProps<C>)}
    />
  );
}
