import { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./login-from";

const meta: Meta<typeof LoginForm> = {
  title: "Example/LoginFrom",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Login: Story = {};
