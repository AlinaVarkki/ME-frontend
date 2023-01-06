import './_DashboardPage.scss'

import React, { ReactElement } from 'react'
import DrawerPageBox from '../../shared/drawerPageBox/DrawerPageBox'
import GeneralOverview from './generalOverviewSection/generalOverview/GeneralOverview'
import StatsSection from './statsSection/StatsSection'

function DashboardPage (): ReactElement {
  return (
      <DrawerPageBox>
          <GeneralOverview/>
          <StatsSection/>
      </DrawerPageBox>
  )
}

export default DashboardPage
