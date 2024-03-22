import BottomNav from "@/components/BottomNav"
import { trpc } from "@/utils/trpc"
import { useAtom } from "jotai"
import { useRouter } from "next/router"

import type { YYYYMMDD } from "@/utils/atoms"
import { currentDateAtom, datesListAtom } from "@/utils/atoms"


const dates: YYYYMMDD[] = [
  '2024-04-13',
  '2024-04-14'
]

export default async function ViewPage() {
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom);
  const [datesList, setDatesList] = useAtom(datesListAtom);

  const prismaDates = await trpc.dates.useQuery()
  if (!prismaDates.data) return (
    <p>エラー：データベースに情報がありません。</p>
  )
  setDatesList(prismaDates.data.map((obj) => {
    return obj.date
  }))

  const router = useRouter();
  const { date } = await router.query;
  const formatedDate = date as YYYYMMDD

  const dateCheck = prismaDates.data.some((obj) => {
    return obj.date === date
  })
  if (!dateCheck) return router.push('/404')

  setCurrentDate(formatedDate)
  

  return (
    <div>
      <BottomNav/>
    </div>
  )
}