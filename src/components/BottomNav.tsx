import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { blue, grey, red } from '@mui/material/colors';
import { useAtom } from "jotai";
import Link from "next/link";
import { useState } from "react";

import { YYYYMMDD, currentDateAtom, datesListAtom } from "@/utils/atoms";

const BottomNav = () => {
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom);
  const [datesList, setDatesList] = useAtom(datesListAtom)

  const [value, setValue] = useState(0);

  const navs = datesList.map((date) => {
    const dateObj = new Date(date)

    const weekday = dateObj.getDay();

    const day = dateObj.getDate()
    const month = dateObj.getMonth() + 1

    const labelTitle = month + '/' + day

    return (
      <BottomNavigationAction
        label={labelTitle}
        LinkComponent={Link}
        href={`/views/${date}`}
      />
    )
  })

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0, left: 0, right: 0
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        { navs }
      </BottomNavigation>
    </Box>
  )
}

export default BottomNav