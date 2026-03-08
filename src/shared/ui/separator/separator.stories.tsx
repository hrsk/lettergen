import { Separator } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "ui/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalSeparator: Story = {
  args: {
    orientation: "vertical",
  },
  render: () => (
    <div style={{ height: "300px" }}>
      <Separator />
    </div>
  ),
};

export const HorizontalSeparator: Story = {
  args: {
    orientation: "horizontal",
  },
  render: () => (
    <div style={{ width: "300px" }}>
      <Separator />
    </div>
  ),
};
