import './_DashboardPage.scss'

import React, { ReactElement } from 'react'
import DrawerPageBox from '../../shared/drawerPageBox/DrawerPageBox'
import UnderConstruction from '../../shared/underConstruction/UnderConstruction'

function DashboardPage (): ReactElement {
  return (
      <DrawerPageBox>
        <UnderConstruction pageName={'Dashboard'}/>
      </DrawerPageBox>
  )
}

export default DashboardPage
