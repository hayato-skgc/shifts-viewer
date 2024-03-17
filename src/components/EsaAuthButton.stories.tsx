import type { Meta, StoryObj } from "@storybook/react";
import EsaButton from "./EsaAuthButton";

const meta: Meta<typeof EsaButton> = {
  title: 'Components/EsaButton',
  component: EsaButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
}

export default meta;
type Story = StoryObj<typeof EsaButton>;

export const sample: Story = {}