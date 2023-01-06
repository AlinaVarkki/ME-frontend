import * as React from 'react'
import './_NavigationDrawer.scss'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
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
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
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
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                      keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                      display: { xs: 'block', sm: 'none' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                      display: { xs: 'none', sm: 'block' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
            </Box>
        </Box>
  )
}
