import type { Meta, StoryObj } from "@storybook/react";
import ShiftTimeline from "./ShiftTimeline";

const meta: Meta<typeof ShiftTimeline> = {
  title: 'Components/ShiftCards',
  component: ShiftTimeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
}

export default meta;
type Story = StoryObj<typeof ShiftTimeline>;

export const sample: Story = {}