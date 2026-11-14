import type { CSSProperties, ElementType } from "react";
import type { PolymorphicProps } from "../lib/props.js";
import styles from "./box.module.css";
import { merge } from "../lib/class-name.js";
import { space, type Space } from "../lib/space.js";
import { color, type Color } from "../lib/color.js";

export interface BoxOwnProps {
  className?: string;
  style?: CSSProperties;
  background?: Color;
  foreground?: Color;
  direction?: "row" | "column";
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?: "start" | "between" | "around";
  gap?: Space;
  padding?: Space;
  paddingVertical?: Space;
  paddingHorizontal?: Space;
  paddingTop?: Space;
  paddingBottom?: Space;
  paddingLeft?: Space;
  paddingRight?: Space;
  margin?: Space;
  marginVertical?: Space;
  marginHorizontal?: Space;
  marginTop?: Space;
  marginBottom?: Space;
  marginLeft?: Space;
  marginRight?: Space;
  borderRadius?: "none" | "small" | "default" | "full";
  "data-koi-component"?: string;
}

export type BoxProps<C extends ElementType = "div"> = PolymorphicProps<
  C,
  BoxOwnProps
>;

export function Box<C extends ElementType = "div">({
  as,
  background,
  foreground,
  direction,
  alignItems = "stretch",
  justifyContent = "start",
  gap,
  padding,
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  borderRadius = "none",
  "data-koi-component": dataKoiComponent = "box",
  className,
  style,
  ...elementProps
}: BoxProps<C>) {
  const Element = as ?? "div";

  return (
    <Element
      data-koi-component={dataKoiComponent}
      data-direction={direction}
      data-align-items={alignItems}
      data-justify-content={justifyContent}
      data-gap={gap}
      data-border-radius={borderRadius}
      style={{
        background: color(background),
        color: color(foreground),
        padding: space(padding),
        paddingBlock: space(paddingVertical),
        paddingInline: space(paddingHorizontal),
        paddingTop: space(paddingTop),
        paddingBottom: space(paddingBottom),
        paddingLeft: space(paddingLeft),
        paddingRight: space(paddingRight),
        margin: space(margin),
        marginBlock: space(marginVertical),
        marginInline: space(marginHorizontal),
        marginTop: space(marginTop),
        marginBottom: space(marginBottom),
        marginLeft: space(marginLeft),
        marginRight: space(marginRight),
        ...style,
      }}
      className={merge(styles.box, className)}
      {...elementProps}
    />
  );
}

type FixedDirectionBoxProps<C extends ElementType> = BoxProps<C> & {
  direction?: never;
};

export function Stack<C extends ElementType = "div">(
  props: FixedDirectionBoxProps<C>,
) {
  return <Box<C> data-koi-component="stack" {...props} direction="column" />;
}

export function Inline<C extends ElementType = "div">(
  props: FixedDirectionBoxProps<C>,
) {
  return (
    <Box<C>
      data-koi-component="inline"
      items="center"
      {...props}
      direction="row"
    />
  );
}
