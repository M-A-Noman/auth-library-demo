import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Insert Text Here",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter Your password",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter your contact number",
  },
};

export const Date: Story = {
  args: {
    type: "date",
    placeholder: "Enter your birth date",
  },
};
