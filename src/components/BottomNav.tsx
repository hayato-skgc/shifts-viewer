import type { formatedDate } from "@/views/[date]";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import Link from "next/link";

const BottomNav = ({ dates }: { dates: formatedDate[] }) => {
  const navs = dates.map((map) => 
    <BottomNavigationAction
      LinkComponent={Link}
      href={`/${map.date}`}
    />
  )

  return (
    <Box sx={{
      position: 'fixed',
    }}>
      <BottomNavigation>
        <BottomNavigationAction />
      </BottomNavigation>
    </Box>
  )
}

export default BottomNav