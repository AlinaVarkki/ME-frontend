import './_DashboardPage.scss'

import React, { ReactElement } from 'react'
import DrawerPageBox from '../../shared/drawerPageBox/DrawerPageBox'
import GeneralOverview from './generalOverviewSection/GeneralOverview'
import StatsSection from './statsSection/StatsSection'
import CompareSitesButton from './compareSitesButton/CompareSitesButton'

function DashboardPage (): ReactElement {
  return (
      <DrawerPageBox>
          <CompareSitesButton/>
          <GeneralOverview/>
          <StatsSection/>
      </DrawerPageBox>
  )
}

export default DashboardPage
