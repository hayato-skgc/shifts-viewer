import BottomNav from '@/components/BottomNav'
import { trpc } from '@/utils/trpc'
import { useAtom } from 'jotai'
import { useSession } from 'next-auth/react'

import ShiftTimeline from '@/components/ShiftTimeline'
import type { YYYYMMDD } from '@/utils/atoms'
import { currentDateAtom, datesListAtom } from '@/utils/atoms'

export default function ViewPage() {
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom)
  const [datesList, setDatesList] = useAtom(datesListAtom)
  const { data: session } = useSession()

  const prismaDates = trpc.dates.useQuery()
  const prismaShiftList = trpc.shiftList.useQuery({
    email: session?.user.email!,
  })

  if (!prismaDates.isFetched || !prismaShiftList.isFetched) return <p>読み込み中・・・</p>
  if (!prismaDates.data || !prismaShiftList.data) return <p>エラー：データがありません。</p>
  setDatesList(prismaDates.data)

  const today = new Date().toLocaleDateString('sv-SE') as YYYYMMDD
  const matchDate = prismaDates.data.findIndex((index) => index.date === today)
  if (matchDate !== -1) setCurrentDate(matchDate + 1)

  return (
    <div>
      <ShiftTimeline data={prismaShiftList.data} />
      <BottomNav />
    </div>
  )
}
