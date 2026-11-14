import type { FC } from "react";
import type { PolymorphicProps } from "../lib/props.ts";
import { merge } from "../lib/class-name.ts";
import styles from "./list.module.css";

interface ListOwnProps {
  className?: string;
}

export type OrderedListProps = PolymorphicProps<"ol", ListOwnProps>;

export const OrderedList: FC<OrderedListProps> = ({ className, ...props }) => (
  <ol
    data-koi-component="ordered-list"
    className={merge(styles.list, className)}
    {...props}
  />
);

export type UnorderedListProps = PolymorphicProps<"ul", ListOwnProps>;

export const UnorderedList: FC<UnorderedListProps> = ({
  className,
  ...props
}) => (
  <ul
    data-koi-component="unordered-list"
    className={merge(styles.list, className)}
    {...props}
  />
);

export type ListItemProps = PolymorphicProps<"li", ListOwnProps>;

export const ListItem: FC<ListItemProps> = ({ className, ...props }) => (
  <li
    data-koi-component="list-item"
    className={merge(styles.listItem, className)}
    {...props}
  />
);
