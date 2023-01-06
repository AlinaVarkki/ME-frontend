import React, { ReactElement } from 'react'
import DrawerPageBox from '../../shared/drawerPageBox/DrawerPageBox'
import UnderConstruction from '../../shared/underConstruction/UnderConstruction'

function AnalyticsPage (): ReactElement {
  return (
      <DrawerPageBox>
          <UnderConstruction pageName={'Analytics'}/>
      </DrawerPageBox>
  )
}

export default AnalyticsPage
