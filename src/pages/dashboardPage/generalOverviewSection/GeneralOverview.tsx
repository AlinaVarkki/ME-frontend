import './_GeneralOverview.scss'

import React, { ReactElement } from 'react'
import GeneralOverviewInfoBoxes from './generalOverviewInfoBoxes/GeneralOverviewInfoBoxes'
import { Typography } from '@mui/material'

function GeneralOverview (): ReactElement {
  return (
      <div className="overviewSectionContainer">
          <Typography>
            General Overview
          </Typography>
          <GeneralOverviewInfoBoxes/>
      </div>
  )
}

export default GeneralOverview
