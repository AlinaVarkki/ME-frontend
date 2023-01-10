import React, { ReactElement, ReactNode } from 'react'
import { Box } from '@mui/material'
import './_DrawerPageBox.scss'

function DrawerPageBox (props: { children: ReactNode }): ReactElement {
  return (
      <div className="drawerContentBox" >
          {props.children}
      </div>
  )
}

export default DrawerPageBox
