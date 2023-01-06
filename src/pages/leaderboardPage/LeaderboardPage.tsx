import './_LeaderboardPage.scss'

import React, { ReactElement } from 'react'
import DrawerPageBox from '../../shared/drawerPageBox/DrawerPageBox'
import UnderConstruction from '../../shared/underConstruction/UnderConstruction'

function LeaderboardPage (): ReactElement {
  return (
      <DrawerPageBox>
          <UnderConstruction pageName={'Leaderboard'}/>
      </DrawerPageBox>
  )
}

export default LeaderboardPage
