import React, { ReactElement, ReactNode } from 'react'
import './_DrawerPageBox.scss'

function DrawerPageBox (props: { children: ReactNode }): ReactElement {
  return (
      <div className="drawerContentBox" >
          {props.children}
      </div>
  )
}

export default DrawerPageBox
