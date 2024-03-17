import type { formatedDate } from "@/pages/views/[date]";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const BottomNav = ({ dates }: { dates: formatedDate[] }) => {
  const [value, setValue] = useState(0);

  const navs = dates.map((map) => {
  const labelTitle = `${map.month}/${map.day}`

    return (
      <BottomNavigationAction
        label={labelTitle}
        LinkComponent={Link}
        href={`/views/${map.date}`}
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