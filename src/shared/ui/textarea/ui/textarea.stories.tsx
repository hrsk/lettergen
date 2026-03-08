import { TEXT_AREA_MAX_SYMBOLS } from "@/shared/constants";
import { Textarea } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react-vite";

type Story = StoryObj<typeof Textarea>;
type MetaType = Meta<typeof Textarea>;

const meta: MetaType = {
  title: "ui/Textarea",
  component: Textarea,
  tags: ["autodocs"],

  args: {
    placeholder: "Placeholder...",
    label: "Label",
  },
};

export default meta;

export const Default: Story = {
  args: {
    placeholder: "Placeholder...",
  },
};

export const WithScroll: Story = {
  args: {
    value: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Eaque error autem expedita non commodi aspernatur numquam doloribus
    consequuntur enim, nemo quod repellat ea eveniet quas alias vitae
    quaerat ex itaque quibusdam! Reiciendis maiores ut rem
    nesciunt minus reprehenderit odit asperiores consequatur quo,
    adipisci fuga a cupiditate ab corrupti excepturi consectetur voluptates?
    Quae quisquam sequi dolore ratione sint modi corporis officia reprehenderit
    doloremque repellat, ipsum voluptates earum vitae corrupti quia amet quos
    provident consequatur harum facilis blanditiis nisi. Minima nesciunt impedit
    molestias debitis voluptate quasi a pariatur nisi, odio, sunt dolore nam
    blanditiis exercitationem officia, nemo sapiente doloribus obcaecati tenetur eos!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque error
    autem expedita non commodi aspernatur numquam doloribus consequuntur enim,
    nemo quod repellat ea eveniet quas alias vitae quaerat ex itaque quibusdam!
    Reiciendis maiores ut rem nesciunt minus reprehenderit odit asperiores consequatur quo,
    adipisci fuga a cupiditate ab corrupti excepturi consectetur voluptates? Quae quisquam
    sequi dolore ratione sint modi corporis officia reprehenderit doloremque repellat,
    ipsum voluptates earum vitae corrupti quia amet quos provident consequatur harum
    facilis blanditiis nisi. Minima nesciunt impedit molestias debitis voluptate quasi
    a pariatur nisi, odio, sunt dolore nam blanditiis exercitationem officia, nemo
    sapiente doloribus obcaecati tenetur eos!`,
  },
};

export const WithError: Story = {
  render: () => {
    return (
      <Textarea isError={true}>
        <span style={{ textAlign: "center", color: "var(--warning-300)" }}>
          {1299}/{TEXT_AREA_MAX_SYMBOLS}
        </span>
      </Textarea>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Placeholder...",
  },
};
