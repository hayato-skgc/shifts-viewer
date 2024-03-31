import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useAtom } from 'jotai'
import Link from 'next/link'

import { currentDateAtom, datesListAtom } from '@/utils/atoms'

const BottomNav = () => {
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom)
  const [datesList, setDatesList] = useAtom(datesListAtom)

  const navs = datesList.map((obj) => {
    const dateObj = new Date(obj.date)

    const weekday = dateObj.getDay()

    const day = dateObj.getDate()
    const month = dateObj.getMonth() + 1

    const labelTitle = month + '/' + day

    return <BottomNavigationAction label={labelTitle} LinkComponent={Link} key={obj.id} value={obj.id} />
  })

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={currentDate}
        onChange={(event, newValue) => {
          setCurrentDate(newValue)
        }}
      >
        {navs}
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNav
