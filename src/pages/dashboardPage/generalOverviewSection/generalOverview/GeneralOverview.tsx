import './_GeneralOverview.scss'

import React, { ReactElement } from 'react'
import GeneralOverviewInfoBoxes from '../generalOverviewInfoBoxes/GeneralOverviewInfoBoxes'

function GeneralOverview (): ReactElement {
  return (
      <div>
        General Overview
          <GeneralOverviewInfoBoxes/>
      </div>
  )
}

export default GeneralOverview
