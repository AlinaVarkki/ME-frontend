import './_NavigationDrawer.scss'

import * as React from 'react'
import { ReactElement } from 'react'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import { Link } from '@mui/material'

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import PollOutlinedIcon from '@mui/icons-material/PollOutlined'
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined'

import { DRAWER_WIDTH } from '../resources/constants'

const menuItems = [
  {
    text: 'Dashboard',
    icon: <DashboardOutlinedIcon/>
  },
  {
    text: 'Maps',
    icon: <MapOutlinedIcon/>
  },
  {
    text: 'Analytics',
    icon: <PollOutlinedIcon/>
  },
  {
    text: 'Leaderboard',
    icon: <LeaderboardOutlinedIcon/>
  }
]

export default function ResponsiveDrawer (): ReactElement {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
        <div className="drawerContent">
            <img className="imageIconMenu" src="https://www.energymutual.com/wp-content/uploads/2020/03/EM-1-cropped.svg" alt={'Energy Mutual Logo'}/>
            <List>
                {menuItems.map((item) => (
                    <Link key={item.text} href={item.text}>
                        <ListItem key={item.text} disablePadding className="menuItem">
                            <ListItemButton>
                                <ListItemIcon
                                    className="listItemIcon"
                                    >
                                    {
                                        item.icon
                                    }
                                </ListItemIcon>
                                <ListItemText className="menuItemText" primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
  )

  return (
        <>
            <Toolbar sx={{ justifyContent: 'flex-end' }}>
                <IconButton
                    color='inherit'
                    onClick={handleDrawerToggle}
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                  display: { sm: 'none' },
                  '& .MuiDrawer-paper': { width: DRAWER_WIDTH }
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  flexShrink: 0,
                  '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box' }
                }}
                open
            >
                {drawer}
            </Drawer>
        </>
  )
}
