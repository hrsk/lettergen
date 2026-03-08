import { action } from "storybook/actions";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import { Button } from "@/shared/ui";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    as: ["a"],
    href: [""],
    variant: {
      control: "select",
      options: ["primary", "outline"],
    },
    type: {
      control: "select",
      options: ["button", "reset", "submit"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const onClickHandler = action("Click");

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
    onClick: onClickHandler,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
    onClick: onClickHandler,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "Disabled",
  },
};
export const AsLink: Story = {
  args: {
    variant: "primary",
    disabled: false,
    children: "Link to",
    href: "http://localhost:6006/?path=/story/ui-button--primary",
    as: "a",
  },
};
