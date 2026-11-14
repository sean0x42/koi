"use client";

import {
  createContext,
  useContext,
  useId,
  type FC,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { ErrorLabel, HelpLabel, Label } from "./label.ts";
import { Stack } from "../layout/box.ts";

export interface InputProps {
  id: string;
  name: string | undefined;
  "aria-describedby": string | undefined;
  "aria-invalid": "true" | "false" | undefined;
  "aria-errormessage": string | undefined;
}

const InputPropsContext = createContext<InputProps | null>(null);

export function useInputProps() {
  return useContext(InputPropsContext);
}

export const getHelpId = (id: string) => `${id}-help`;
export const getErrorId = (id: string) => `${id}-error`;

export interface FormControlProps extends PropsWithChildren {
  name?: string;
  label: ReactNode;
  help?: ReactNode;
  error?: ReactNode;
}

export const FormControl: FC<FormControlProps> = ({
  name,
  label,
  help,
  error,
  children,
}) => {
  const id = useId();
  const helpId = help !== undefined ? getHelpId(id) : undefined;
  const errorId = error !== undefined ? getErrorId(id) : undefined;

  return (
    <Stack data-koi-component="form-control" gap={1}>
      <Stack>
        <Label htmlFor={id}>{label}</Label>
        {help && <HelpLabel id={helpId}>{help}</HelpLabel>}
      </Stack>

      <InputPropsContext
        value={{
          id,
          name,
          "aria-describedby": helpId,
          "aria-invalid": error !== undefined ? "true" : undefined,
          "aria-errormessage": errorId,
        }}
      >
        {children}
      </InputPropsContext>

      {error && <ErrorLabel id={errorId}>{error}</ErrorLabel>}
    </Stack>
  );
};
