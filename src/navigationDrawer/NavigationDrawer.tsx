import * as React from 'react'
import './_NavigationDrawer.scss'
import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import ImageIcon from '@mui/icons-material/Image'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { ReactElement } from 'react'

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import PollOutlinedIcon from '@mui/icons-material/PollOutlined'
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined'
import { Link } from '@mui/material'

const drawerWidth = 260

export default function ResponsiveDrawer (): ReactElement {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen)
  }

  const pickIcon = (text: string): ReactElement => {
    switch (text) {
      case 'Dashboard':
        return (<DashboardOutlinedIcon/>)
      case 'Maps':
        return (<MapOutlinedIcon/>)
      case 'Analytics':
        return (<PollOutlinedIcon/>)
      case 'Leaderboard':
        return (<LeaderboardOutlinedIcon/>)
      default:
        return (<ImageIcon/>)
    }
  }

  const drawer = (
        <div className="drawerContent">
            <img className="imageIconMenu" src="https://www.energymutual.com/wp-content/uploads/2020/03/EM-1-cropped.svg" alt={'Energy Mutual Logo'}/>
            <List>
                {['Dashboard', 'Maps', 'Analytics', 'Leaderboard'].map((text, index) => (
                    <Link key={text} href={text}>
                        <ListItem key={text} disablePadding className="menuItem">
                            <ListItemButton>
                                <ListItemIcon
                                    className="listItemIcon"
                                    >
                                    {
                                        pickIcon(text)
                                    }
                                </ListItemIcon>
                                <ListItemText className="menuItemText" primary={text} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
  )

  return (
        <>
            <AppBar
                sx={{
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                  ml: { sm: `${drawerWidth}px` }
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" noWrap component="div">
                        Search bar
                    </Typography>
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                  display: { sm: 'none' },
                  '& .MuiDrawer-paper': { width: drawerWidth }
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  flexShrink: 0,
                  '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
                }}
                open
            >
                {drawer}
            </Drawer>
            <Typography>

            halloooo
            </Typography>
        </>
  )
}