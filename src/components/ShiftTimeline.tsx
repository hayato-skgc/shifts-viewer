import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'

import { Box, Typography } from '@mui/material'

import ShiftCard, { ShiftCardProps } from './ShiftCard'

interface ShiftTimelineProps extends ShiftCardProps {
  startTime: string
  endTime: string
}

export default function ShiftTimeline(props: { data: ShiftTimelineProps[] }) {
  const now = new Date()
  const [targetHour, targetMinutes] = [now.getHours(), now.getMinutes()]

  const TimelineItems = props.data.map((prop, key) => {
    const { startTime, endTime, ...cardProps } = prop
    const [hour, minutes] = endTime.split(':').map(Number)
    return (
      <TimelineItem key={key}>
        <TimelineOppositeContent>
          <Box sx={{ textAlign: 'center' }}>
            <Typography>
              {startTime}
              <br />|<br />
              {endTime}
            </Typography>
          </Box>
        </TimelineOppositeContent>
        <TimelineSeparator>
          {hour > targetHour || (hour === targetHour && minutes > targetMinutes) ? (
            <>
              <TimelineDot color="primary" />
              <TimelineConnector sx={{ backgroundColor: 'primary.main' }} />
            </>
          ) : (
            <>
              <TimelineDot />
              <TimelineConnector />
            </>
          )}
        </TimelineSeparator>
        <TimelineContent>
          <ShiftCard {...cardProps} />
        </TimelineContent>
      </TimelineItem>
    )
  })
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {TimelineItems}
    </Timeline>
  )
}
