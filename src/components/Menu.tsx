import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { signOut } from 'next-auth/react'
import { useState } from 'react'

export default function Menu({ name }: { name: string }) {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }} onClick={toggleDrawer(!open)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">シフト一覧</Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer open={open} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            height: '100vh',
            width: '320px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingY: 4,
          }}
        >
          <Typography
            sx={{
              padding: 2,
              marginTop: 'auto',
            }}
          >
            ログイン中：{name}
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              signOut()
            }}
            size="medium"
          >
            ログアウト
          </Button>
        </Box>
      </SwipeableDrawer>
    </>
  )
}
