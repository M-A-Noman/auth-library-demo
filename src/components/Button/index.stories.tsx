import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {
//     children: "Click me",
//     variant: "solid",
//     size: "md",
//     colorscheme: "primary",
//   },
// };

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Button",
    size: "md",
  },
};
export const Outlined: Story = {
  args: {
    variant: "outline",
    children: "Button",
    size: "md",
  },
};
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
    size: "md",
  },
};
