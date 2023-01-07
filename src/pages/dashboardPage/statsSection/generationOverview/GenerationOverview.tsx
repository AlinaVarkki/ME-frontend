import './_GenerationOverview.scss'

import React, { ReactElement } from 'react'
import GenerationOverviewBox from './generationOverviewBox/GenerationOverviewBox'

function GenerationOverview (): ReactElement {
  return (
      <div>
          <GenerationOverviewBox/>
      </div>
  )
}

export default GenerationOverview
