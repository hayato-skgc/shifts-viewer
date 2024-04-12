import BottomNav from '@/components/BottomNav'
import { trpc } from '@/utils/trpc'
import { useAtom } from 'jotai'
import { useSession } from 'next-auth/react'

import Menu from '@/components/Menu'
import ShiftTimeline from '@/components/ShiftTimeline'
import type { YYYYMMDD } from '@/utils/atoms'
import { currentDateAtom, datesListAtom } from '@/utils/atoms'
import { Box, Typography } from '@mui/material'

export default function ViewPage() {
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom)
  const [datesList, setDatesList] = useAtom(datesListAtom)
  const { data: session } = useSession()

  const prismaDates = trpc.dates.useQuery()
  const prismaShiftList = trpc.shiftList.useQuery({
    email: session?.user.email!,
  })

  if (!prismaDates.isFetched || !prismaShiftList.isFetched) return <p>読み込み中・・・</p>
  if (!prismaDates.data?.length || !prismaShiftList.data?.length)
    return (
      <Box>
        <Menu name={session?.user.name!} />
        <Box sx={{ marginX: 2, marginTop: 2 }}>
          <Typography variant="h5">データがありません。</Typography>
        </Box>
      </Box>
    )
  setDatesList(prismaDates.data)

  const today = new Date().toLocaleDateString('sv-SE') as YYYYMMDD
  const matchDate = prismaDates.data.findIndex((index) => index.date === today)
  if (matchDate !== -1) setCurrentDate(matchDate + 1)

  const dateObj = new Date(prismaDates.data[currentDate - 1].date)

  const day = dateObj.getDate()
  const month = dateObj.getMonth() + 1

  return (
    <Box>
      <Menu name={session?.user.name!} />
      <Box sx={{ marginX: 2, marginTop: 2 }}>
        <Typography variant="h5">
          {month}月{day}日のシフト
        </Typography>
      </Box>
      <ShiftTimeline data={prismaShiftList.data} />
      <BottomNav />
    </Box>
  )
}
