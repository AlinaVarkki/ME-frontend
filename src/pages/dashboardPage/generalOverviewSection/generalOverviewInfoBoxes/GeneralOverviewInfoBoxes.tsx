import './_GeneralOverviewInfoBoxes.scss'

import React, { ReactElement } from 'react'
import GeneralOverviewInfoBox from '../generalOverviewInfoBox/GeneralOverviewInfoBox'
import { generalOverviewInfo } from '../../../../resources/GeneralOverviewMockInfo'

function GeneralOverviewInfoBoxes (): ReactElement {
  return (
      <div className="infoBoxesContainer">
          {
              generalOverviewInfo.map((overviewItem, index) => (
                  <GeneralOverviewInfoBox key={index} valueDescription={overviewItem.valueDescription} value={overviewItem.value}/>
              ))
          }
      </div>
  )
}

export default GeneralOverviewInfoBoxes
