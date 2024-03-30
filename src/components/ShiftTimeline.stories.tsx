import type { Meta, StoryObj } from '@storybook/react'
import ShiftTimeline from './ShiftTimeline'

const meta: Meta<typeof ShiftTimeline> = {
  title: 'Components/ShiftCards',
  component: ShiftTimeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof ShiftTimeline>

export const sample: Story = {
  args: {
    data: [
      {
        title: '門番',
        locate: '講義棟門',
        esaNumber: 2297,
        startTime: '08:30',
        endTime: '09:30',
        isLeader: false,
        dateId: 1,
      },
      {
        title: '企画',
        locate: 'K111教室',
        esaNumber: 2297,
        startTime: '09:30',
        endTime: '10:30',
        isLeader: true,
        dateId: 1,
      },
      {
        title: '企画',
        locate: 'K111教室',
        esaNumber: 2297,
        startTime: '09:30',
        endTime: '10:30',
        isLeader: true,
        dateId: 2,
      },
      {
        title: '門番',
        locate: '講義棟門',
        esaNumber: 2297,
        startTime: '08:30',
        endTime: '09:30',
        isLeader: false,
        dateId: 2,
      },
    ],
  },
}
