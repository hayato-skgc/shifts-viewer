
import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent, { timelineOppositeContentClasses, } from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'

import { Box, Typography } from '@mui/material'
import ShiftCard from './ShiftCard'

export default function ShiftTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent>
          <Box sx={{textAlign: 'center'}}>
            <Typography>08:30<br/>|<br/>09:30</Typography>
          </Box>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <ShiftCard />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
  
}