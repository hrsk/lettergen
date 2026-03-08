import { Input } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ui/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "search", "email"],
    },
    label: { control: "text" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    type: "text",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default",
    placeholder: "Placeholder...",
  },
};

export const WithValue: Story = {
  args: {
    label: "With value",
    value: "HTML, CSS and doing things in time...",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    value: "HTML, CSS and doing things in time...",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: "With error",
    error: true,
    placeholder: "Placeholder...",
  },
};
