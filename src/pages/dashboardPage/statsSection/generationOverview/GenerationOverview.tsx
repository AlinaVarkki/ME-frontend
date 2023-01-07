import './_GenerationOverview.scss'

import React, { ReactElement } from 'react'
import GenerationOverviewBox from './generationOverviewBox/GenerationOverviewBox'

function GenerationOverview (): ReactElement {
  return (
      <div className="GenerationOverviewContainer">
          <GenerationOverviewBox/>
          <GenerationOverviewBox/>
          <GenerationOverviewBox/>
      </div>
  )
}

export default GenerationOverview
