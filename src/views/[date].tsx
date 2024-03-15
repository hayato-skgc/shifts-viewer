import BottomNav from "@/components/BottomNav"

type YYYY = `20${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
type MM = `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | `1${0 | 1 | 2}`
type DD = `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | `${1 | 2}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | `3${0 | 1}`
export type YYYYMMDD = `${YYYY}-${MM}-${DD}`


const dates: YYYYMMDD[] = [
  '2024-04-13',
  '2024-04-14'
]

export type formatedDate = {
  date: YYYYMMDD
  year: number
  month: number
  day: number
}
const dateFormat = (dates: YYYYMMDD[]) => {
  const formatedDates = dates.map((dateOrigin): formatedDate => {
    const date = new Date(dateOrigin)
    const year = date.getFullYear()
    const month = date.getDate() + 1
    const day = date.getDay()
    return {
      date: dateOrigin,
      year: year,
      month: month,
      day: day
    }
  })
  return formatedDates
}

export default function ViewPage() {
  const formatedDates = dateFormat(dates)
  return (
    <BottomNav dates={formatedDates} />
  )
}