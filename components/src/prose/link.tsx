import type { ElementType } from "react";
import type { PolymorphicProps } from "../lib/props.ts";
import { merge } from "../lib/class-name.ts";
import styles from "./link.module.css";

interface LinkOwnProps {
  className?: string;
}

export type LinkProps<C extends ElementType = "a"> = PolymorphicProps<
  C,
  LinkOwnProps
>;

export function Link<C extends ElementType = "a">({
  as,
  className,
  ...props
}: LinkProps<C>) {
  const Element = as ?? "a";

  return (
    <Element
      data-koi-component="link"
      className={merge(styles.link, className)}
      {...props}
    />
  );
}
