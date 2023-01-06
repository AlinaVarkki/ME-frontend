import React, { ReactElement } from 'react'
import GeneralOverviewInfoBox from '../generalOverviewInfoBox/GeneralOverviewInfoBox'

function GeneralOverviewInfoBoxes (): ReactElement {
  return (
      <div>
          <GeneralOverviewInfoBox/>
          <GeneralOverviewInfoBox/>
          <GeneralOverviewInfoBox/>
      </div>
  )
}

export default GeneralOverviewInfoBoxes
