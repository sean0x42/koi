import type { FC } from "react";
import type { PolymorphicProps } from "../lib/props.ts";
import styles from "./label.module.css";
import { merge } from "../lib/class-name.ts";

interface LabelOwnProps {
  htmlFor: string;
  className?: string;
}

export type LabelProps = PolymorphicProps<"label", LabelOwnProps>;

export const Label: FC<LabelProps> = ({ htmlFor, className, ...props }) => (
  <label
    data-koi-component="label"
    className={merge(styles.label, className)}
    htmlFor={htmlFor}
    {...props}
  />
);

interface HelpLabelOwnProps {
  className?: string;
}

export type HelpLabelProps = PolymorphicProps<"p", HelpLabelOwnProps>;

export const HelpLabel: FC<HelpLabelProps> = ({ className, ...props }) => (
  <p
    data-koi-component="help-label"
    className={merge(styles.helpLabel, className)}
    {...props}
  />
);

interface ErrorLabelOwnProps {
  className?: string;
}

export type ErrorLabelProps = PolymorphicProps<"p", ErrorLabelOwnProps>;

export const ErrorLabel: FC<ErrorLabelProps> = ({ className, ...props }) => (
  <p
    data-koi-component="error-label"
    className={merge(styles.errorLabel, className)}
    {...props}
  />
);
