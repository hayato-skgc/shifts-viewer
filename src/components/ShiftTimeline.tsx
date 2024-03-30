import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import { Box, Typography } from '@mui/material'

import { useAtom } from 'jotai'

import { currentDateAtom } from '@/utils/atoms'
import ShiftCard, { ShiftCardProps } from './ShiftCard'

export interface ShiftTimelineProps extends ShiftCardProps {
  dateId: number
  startTime: string
  endTime: string
}

export default function ShiftTimeline(props: { data: ShiftTimelineProps[] }) {
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom)

  const now = new Date()
  const [targetHour, targetMinutes] = [now.getHours(), now.getMinutes()]

  const sortData = props.data.sort((a, b) => {
    return a.startTime.localeCompare(b.startTime, undefined, { numeric: true })
  })

  const TimelineItems = sortData
    .filter((props) => props.dateId === currentDate)
    .map((props, key) => {
      const { startTime, endTime, ...cardProps } = props
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
