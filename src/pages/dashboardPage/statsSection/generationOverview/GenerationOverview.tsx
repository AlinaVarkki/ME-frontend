import './_GenerationOverview.scss'

import React, { ReactElement } from 'react'
import GenerationOverviewBox from './generationOverviewBox/GenerationOverviewBox'
import { generationOverviewInfo } from '../../../../resources/GenerationOverviewMockInfo'

function GenerationOverview (): ReactElement {
  return (
      <div className="GenerationOverviewContainer">
          {
              generationOverviewInfo.map((genOverviewItem, index) => (
                  <GenerationOverviewBox key={index} value={genOverviewItem.value} valueDescription={genOverviewItem.valueDescription} backgroundColour={index === generationOverviewInfo.length - 1 ? 'green' : 'blue'}/>
              ))
          }
      </div>
  )
}

export default GenerationOverview
