import './_MapsPage.scss'

import React, { ReactElement } from 'react'
import DrawerPageBox from '../../shared/drawerPageBox/DrawerPageBox'
import UnderConstruction from '../../shared/underConstruction/UnderConstruction'

function MapsPage (): ReactElement {
  return (
      <DrawerPageBox>
        <UnderConstruction pageName={'Maps'}/>
      </DrawerPageBox>
  )
}

export default MapsPage
