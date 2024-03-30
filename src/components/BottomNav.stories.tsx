import type { Meta, StoryObj } from '@storybook/react'
import BottomNav from './BottomNav'

const meta: Meta<typeof BottomNav> = {
  title: 'Components/BottomNav',
  component: BottomNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof BottomNav>

export const Sample: Story = {
  args: {
    dates: [
      {
        date: '2024-04-13',
        year: 2024,
        month: 4,
        day: 13,
      },
      {
        date: '2024-04-14',
        year: 2024,
        month: 4,
        day: 14,
      },
    ],
  },
}
