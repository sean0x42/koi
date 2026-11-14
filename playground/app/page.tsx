"use client";

import type { FC } from "react";
import NextLink from "next/link";
import { Button } from "@sean0x42/koi/button";
import { Stack } from "@sean0x42/koi/layout";
import {
  Bold,
  Copy,
  Heading,
  Italic,
  Link,
  ListItem,
  UnorderedList,
} from "@sean0x42/koi/prose";
import { FormControl, Textbox } from "@sean0x42/koi/forms";

const HomePage: FC = () => (
  <Stack gap={4} padding={6} alignItems="start">
    <Heading size={1}>Koi Design System</Heading>
    <Copy>
      This component <Italic>playground</Italic> shows each of the core{" "}
      <Bold>components</Bold>.
    </Copy>
    <Link as={NextLink} href="/">
      This is a link
    </Link>

    <UnorderedList>
      <ListItem>This is a list item</ListItem>
    </UnorderedList>

    <Button onClick={() => alert("Test!")}>Alert me</Button>

    <FormControl
      label="This is a textbox"
      help="It has some help text"
      error="And an error message"
    >
      <Textbox />
    </FormControl>
  </Stack>
);

export default HomePage;
