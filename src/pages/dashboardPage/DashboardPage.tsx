import './_DashboardPage.scss'

import React, { ReactElement } from 'react'
import DrawerPageBox from '../../shared/drawerPageBox/DrawerPageBox'
import GeneralOverview from './generalOverviewSection/generalOverview/GeneralOverview'

function DashboardPage (): ReactElement {
  return (
      <DrawerPageBox>
          <GeneralOverview/>
      </DrawerPageBox>
  )
}

export default DashboardPage
