import React, { ReactElement, ReactNode } from 'react'
import { Box } from '@mui/material'
import './_DrawerPageBox.scss'

function DrawerPageBox (props: { children: ReactNode }): ReactElement {
  return (
      <Box component="main" className="drawerContentBox" sx={{ flexGrow: 1, p: 7 }}>
          {props.children}
      </Box>
  )
}

export default DrawerPageBox
